import { StudyBuilder } from "../common";

import { VaccinationDef } from "../common";

import { IntakeDef } from "./surveys/intake";
import { WeeklyDef } from "./surveys/weekly";

import { StudyRulesBuilder } from "./studyRules";
import { resetIntake_rules } from "./customRules/resetIntake";

import "./languages/en-ch";

import "influenzanet-common-study/build/studies/common/languages/it";
import "./languages/it-ch";

import "./languages/fr-ch";

import "./languages/de-ch";

export interface SurveysDefs {
  intake: IntakeDef;
  weekly: WeeklyDef;
  vaccination: VaccinationDef;
}

export class GrippenetChStudyBuilder extends StudyBuilder {
  build() {
    const intake = new IntakeDef();
    const weekly = new WeeklyDef();
    const vacc = new VaccinationDef();

    this.surveys = [intake, weekly, vacc];

    const surveys = {
      intake: intake,
      weekly: weekly,
      vaccination: vacc,
    };

    const rulesBuilder = new StudyRulesBuilder(surveys);

    this.studyRules = rulesBuilder.build();
    this.customStudyRules = [resetIntake_rules];
  }
}
