import {
  responseGroupKey,
  singleChoiceKey,
} from "case-editor-tools/constants/key-definitions";
import { StudyEngine } from "case-editor-tools/expression-utils/studyEngineExpressions";
import { ParticipantFlags as CommonParticipantFlags } from "../common";

export const ParticipantFlags = {
  // flags from common implementations
  ...CommonParticipantFlags,
  // our extensions
  gender: {
    key: "gender",
    buildExpression: (gender_key: string) =>
      StudyEngine.getSelectedKeys(
        gender_key,
        `${responseGroupKey}.${singleChoiceKey}`,
      ),
  },
};