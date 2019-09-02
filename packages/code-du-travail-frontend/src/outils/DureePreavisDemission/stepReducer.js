import { StepIntro } from "./steps/Introduction";
import { StepResult } from "./steps/Result";
import { StepInformations } from "./steps/Informations";

export const initialSteps = [
  {
    component: StepIntro,
    name: "intro",
    label: "Introduction"
  },
  {
    component: StepInformations,
    name: "infos",
    label: "Informations"
  },
  {
    component: StepResult,
    name: "results",
    label: "Durée du préavis"
  }
];

export function stepReducer(steps, { type }) {
  switch (type) {
    case "reset": {
      return [...initialSteps];
    }
    default:
      console.warn("action unknow", type);
      return steps;
  }
}