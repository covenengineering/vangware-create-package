import type { ReadOnlyRecord } from "@vangware/types";
import type { Answers } from "./Answers.js";

export type TemplateData = Answers & {
	readonly devDependencies: ReadOnlyRecord<string, string>;
};
