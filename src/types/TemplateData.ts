import type { Answers } from "./Answers.js";

export type TemplateData = Answers & {
	readonly devDependencies: Record<string, string>;
};
