import Engine from "publicodes";
import { mergeModels } from "../internal/merger";

const engine = new Engine(mergeModels());

test.each`
  seniority | category                | expectedNotice
  ${5}      | ${"Cadres"}             | ${3}
  ${6}      | ${"Cadres"}             | ${1}
  ${24}     | ${"Cadres"}             | ${2}
  ${5}      | ${"Employés"}           | ${0}
  ${6}      | ${"Employés"}           | ${1}
  ${24}     | ${"Employés"}           | ${2}
  ${5}      | ${"Agents de maîtrise"} | ${0}
  ${6}      | ${"Agents de maîtrise"} | ${1}
  ${24}     | ${"Agents de maîtrise"} | ${2}
`(
  "Pour un $category possédant $seniority mois d'ancienneté, son préavis de départ à la retraite devrait être $expectedNotice mois",
  ({ seniority, category, expectedNotice }) => {
    const result = engine
      .setSituation({
        "contrat salarié . convention collective": "'IDCC0675'",
        "contrat salarié . ancienneté": seniority,
        "contrat salarié . mise à la retraite": "non",
        "contrat salarié . convention collective . habillement commerce succursales . catégorie professionnelle": `'${category}'`,
      })
      .evaluate("contrat salarié . préavis de retraite");

    expect(result.nodeValue).toEqual(expectedNotice);
    expect(result.unit?.numerators).toEqual(["mois"]);
  }
);

test.each`
  seniority | category                | expectedNotice | expectedUnit
  ${5}      | ${"Cadres"}             | ${3}           | ${"mois"}
  ${6}      | ${"Cadres"}             | ${3}           | ${"mois"}
  ${24}     | ${"Cadres"}             | ${3}           | ${"mois"}
  ${0}      | ${"Employés"}           | ${0}           | ${"mois"}
  ${1}      | ${"Employés"}           | ${15}          | ${"jours"}
  ${6}      | ${"Employés"}           | ${1}           | ${"mois"}
  ${24}     | ${"Employés"}           | ${2}           | ${"mois"}
  ${5}      | ${"Agents de maîtrise"} | ${2}           | ${"mois"}
  ${6}      | ${"Agents de maîtrise"} | ${2}           | ${"mois"}
  ${24}     | ${"Agents de maîtrise"} | ${2}           | ${"mois"}
`(
  "Pour un $category possédant $seniority mois d'ancienneté, son préavis de mise à la retraite devrait être $expectedNotice $expectedUnit",
  ({ seniority, category, expectedNotice, expectedUnit }) => {
    const result = engine
      .setSituation({
        "contrat salarié . convention collective": "'IDCC0675'",
        "contrat salarié . ancienneté": seniority,
        "contrat salarié . mise à la retraite": "oui",
        "contrat salarié . convention collective . habillement commerce succursales . catégorie professionnelle": `'${category}'`,
      })
      .evaluate("contrat salarié . préavis de retraite");

    expect(result.nodeValue).toEqual(expectedNotice);
    expect(result.unit?.numerators).toEqual([expectedUnit]);
  }
);
