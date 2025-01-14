import Engine from "publicodes";
import { mergeModels } from "../internal/merger";
import { getReferences } from "../utils/GetReferences";
import {
  DepartRetraiteReferences,
  MiseRetraiteReferences,
} from "./common/LegalReferences";

const engine = new Engine(mergeModels());

const CadreReferences = [
  {
    article: "Article 28 et Avenant Cadres",
    url:
      "https://www.legifrance.gouv.fr/conv_coll/id/KALIARTI000005856351/?idConteneur=KALICONT000005635856",
  },
  {
    article: "Article 8",
    url:
      "https://www.legifrance.gouv.fr/conv_coll/id/KALIARTI000005856728/?idConteneur=KALICONT000005635856",
  },
];

const CollaborateursReferences = [
  {
    article: "Article 28 et Avenant Collaborateurs",
    url:
      "https://www.legifrance.gouv.fr/conv_coll/id/KALIARTI000005856351/?idConteneur=KALICONT000005635856",
  },
  {
    article: "Article 15",
    url:
      "https://www.legifrance.gouv.fr/conv_coll/id/KALIARTI000005856709/?idConteneur=KALICONT000005635856",
  },
];

test.each`
  retirement  | expectedReferences
  ${"mise"}   | ${MiseRetraiteReferences.concat(CadreReferences)}
  ${"depart"} | ${DepartRetraiteReferences.concat(CadreReferences)}
`(
  "Vérification des références juridiques pour un cadre en $retirement à la retraite",
  ({ retirement, expectedReferences }) => {
    const result = getReferences(
      engine.setSituation({
        "contrat salarié . convention collective": "'IDCC0292'",
        "contrat salarié . ancienneté": 1,
        "contrat salarié . mise à la retraite":
          retirement === "mise" ? "oui" : "non",
        "contrat salarié . convention collective . plasturgie . catégorie professionnelle":
          "'Cadres'",
      })
    );
    expect(result).toEqual(expect.arrayContaining(expectedReferences));
  }
);

test.each`
  retirement  | expectedReferences
  ${"mise"}   | ${MiseRetraiteReferences.concat(CollaborateursReferences)}
  ${"depart"} | ${DepartRetraiteReferences.concat(CollaborateursReferences)}
`(
  "Vérification des références juridiques pour un collaborateur en $retirement à la retraite",
  ({ retirement, expectedReferences }) => {
    const result = getReferences(
      engine.setSituation({
        "contrat salarié . convention collective": "'IDCC0292'",
        "contrat salarié . ancienneté": 1,
        "contrat salarié . mise à la retraite":
          retirement === "mise" ? "oui" : "non",
        "contrat salarié . convention collective . plasturgie . catégorie professionnelle":
          "'Collaborateurs'",
        "contrat salarié . convention collective . plasturgie . catégorie professionnelle . Collaborateurs . coefficient": 800,
      })
    );
    expect(result).toEqual(expect.arrayContaining(expectedReferences));
  }
);
