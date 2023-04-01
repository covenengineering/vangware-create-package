import type { ReadOnlyRecord } from "@vangware/types";
import type { Answers } from "./Answers.js";

export type TemplateData = Answers &
	ReadOnlyRecord<"devDependencies", ReadOnlyRecord<string, string>>;
