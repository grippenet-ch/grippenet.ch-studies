import { StudyEngine } from "case-editor-tools/expression-utils/studyEngineExpressions";

import { StudyRulesBuilder as CommonStudyRulesBuilder } from "../../common";

import { symptomsFeedbackReport } from "../reports/symptomsFeedback";
import { ParticipantFlags } from "../participantFlags";
import { SurveysDefs } from "../study";

/*
 * extends StudyRulesBuilder found in common-study-definition by passing
 * SurveyDefs instead of SurveyKeys, needed for easy access to exported
 * questions from these rules.
 */
export class StudyRulesBuilder extends CommonStudyRulesBuilder {
  surveys: SurveysDefs;

  constructor(surveys: SurveysDefs) {
    super(surveys);
    this.surveys = surveys;
  }

  extraRules() {
    // reassigns the intake survey in prio mode after 1 year
    const prioIntakeYearly = StudyEngine.ifThen(
      StudyEngine.checkSurveyResponseKey(this.keys.intake.key),
      StudyEngine.participantActions.assignedSurveys.add(
        this.keys.intake.key,
        "prio",
        StudyEngine.timestampWithOffset({
          years: 1,
        }),
      ),
    );

    // updates the gender participant flag
    const updateGenderFlag = StudyEngine.ifThen(
      StudyEngine.checkSurveyResponseKey(this.keys.intake.key),
      StudyEngine.participantActions.updateFlag(
        ParticipantFlags.gender.key,
        ParticipantFlags.gender.buildExpression(
          this.surveys.intake.Q_gender.key,
        ),
      ),
    );

    // study entry rules
    this.rules.entry = [
      // common rules from the base class
      ...this.rules.entry,
    ];

    // study submit rules
    this.rules.submit = [
      // common rules from the base class
      ...this.rules.submit,
      // custom submit rules for:
      // - intake resubmission
      // - gender flag
      // - symptoms feedback
      prioIntakeYearly,
      updateGenderFlag,
      symptomsFeedbackReport(this.surveys.weekly),
    ];

    // study timer rules
    this.rules.timer = [
      // custom rules from base class (possibly undefined)
      ...(this.rules.timer ?? []),
    ];
  }
}
