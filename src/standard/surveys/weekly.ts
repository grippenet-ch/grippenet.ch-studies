import { Item } from "case-editor-tools/surveys/types";
import { CommonStudy } from "../../common";
import { WeeklyDef as CommonWeeklyDef } from "../../common";

export class WeeklyDef extends CommonWeeklyDef {
  Q_symptoms: Item;

  constructor() {
    super();

    const Q_symptoms = new CommonStudy.questionPools.weekly.Symptoms({
      parentKey: this.key,
      isRequired: true,
      useRash: true,
    });

    this.replaceQuestion(Q_symptoms);
    this.Q_symptoms = Q_symptoms;

    const Q_same_illness = new CommonStudy.questionPools.weekly.SameIllness({
      parentKey: this.key,
      isRequired: true,
      usePrefillsNote: false,
    });

    // FIXME: this is also exported in the base class, how to keep those kind of
    // things aligned without having to know it in advance?
    this.replaceQuestion(Q_same_illness);
    this.Q_same_illnes = Q_same_illness;
  }
}
