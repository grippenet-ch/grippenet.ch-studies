import { LanguageHelpers } from "../../../common";

import intake from "./intake.json";
import weekly from "./weekly.json";
import vaccination from "./vaccination.json";

import overrides from "./overrides.json";

const languageId = "it";

LanguageHelpers.addLanguage(languageId, intake);
LanguageHelpers.addLanguage(languageId, weekly);
LanguageHelpers.addLanguage(languageId, vaccination);

LanguageHelpers.addLanguage(languageId, overrides);