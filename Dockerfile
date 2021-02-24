FROM node:12.20-alpine3.10

# NOTE(douglasduteil): add `curl` in the master image
# `curl` is very useful for later health check tests ;)
RUN apk add --no-cache git=~2 curl=~7

#

WORKDIR /app

#

COPY ./scripts /app/scripts

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

COPY ./packages/conventions/package.json /app/packages/conventions/package.json
COPY ./packages/elasticsearch-mapping/package.json /app/packages/elasticsearch-mapping/package.json
COPY ./packages/elasticsearch-utils/package.json /app/packages/elasticsearch-utils/package.json
COPY ./packages/prime-precarite/package.json /app/packages/prime-precarite/package.json
COPY ./packages/react-fiche-service-public/package.json /app/packages/react-fiche-service-public/package.json
COPY ./packages/simulateurs/package.json /app/packages/simulateurs/package.json
COPY ./packages/slugify/package.json /app/packages/slugify/package.json
COPY ./packages/sources/package.json /app/packages/sources/package.json
COPY ./packages/vectorizer/package.json /app/packages/vectorizer/package.json

# PERF(douglasduteil): put packages that are more likely to change in order here
# By order of "more likely to change" the frontend, the api, etc... are changing
# more often than the dataset.
# Putting them after will optimise the native docker build cache of the image
COPY ./packages/react-ui/package.json /app/packages/react-ui/package.json
COPY ./packages/code-du-travail-api/package.json /app/packages/code-du-travail-api/package.json
COPY ./packages/code-du-travail-frontend/package.json /app/packages/code-du-travail-frontend/package.json

ARG IS_DOCKER=true
RUN yarn --frozen-lockfile && yarn cache clean

#

COPY ./lerna.json /app/lerna.json
COPY ./packages /app/packages

ARG CDTN_ADMIN_ENDPOINT
ENV CDTN_ADMIN_ENDPOINT=$CDTN_ADMIN_ENDPOINT
RUN yarn build
