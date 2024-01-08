import { Item } from "case-editor-tools/surveys/types";
import { CommonStudy } from "../../common";
import { IntakeDef as CommonIntakeDef } from "../../common";

export class IntakeDef extends CommonIntakeDef {
  Q_gender: Item;

  constructor() {
    super();

    const Q_gender = new CommonStudy.questionPools.intake.Gender({
      parentKey: this.key,
      isRequired: true,
    });

    // FIXME: does not really need to be replaced just to be exported but it's
    // probably safer to have the same object used and exported
    this.replaceQuestion(Q_gender);

    // FIXME: this raises a type error if external/common-study-definition is
    // built
    this.Q_gender = Q_gender;

    const Q_postal = new CommonStudy.questionPools.intake.PostalCode({
      parentKey: this.key,
      isRequired: true,
      zipLength: 4
    });

    // FIXME: does not really need to be replaced just to be exported but it's
    // probably safer to have the same object used and exported
    this.replaceQuestion(Q_postal);
  }
}
