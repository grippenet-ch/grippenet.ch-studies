import { study_exporter } from "./common";

import { GrippenetChStudyBuilder } from "./standard/study";

const builder = new GrippenetChStudyBuilder("standard");

builder.build();

const study = builder.getStudy();

study_exporter([study], { check: true, missing: true, classNames: true });
