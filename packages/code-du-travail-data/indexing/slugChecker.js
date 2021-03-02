import { logger } from "@socialgouv/cdtn...infra...logger";

import { cdtnDocumentsGen, getDuplicateSlugs } from "./cdtnDocuments";

const checkDuplicates = async () => {
  const documents = await cdtnDocumentsGen();
  const duplicateSlugs = getDuplicateSlugs(documents);

  if (duplicateSlugs.length > 0) {
    logger.error("Document with same slugs detected !");
    logger.error("slug | count");
    logger.error("-----|----");
    Object.entries(duplicateSlugs).forEach(([slug, count]) =>
      logger.error(`${slug} | ${count}`)
    );
    process.exit(1);
  }
};

checkDuplicates();