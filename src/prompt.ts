import prompts from "prompts";
import type { Answers } from "./types/Answers.js";
import { hasValidLength } from "./validations/hasValidLength.js";
import { isValidPackageName } from "./validations/isValidPackageName.js";

export const prompt = (): Promise<Answers> =>
	prompts(
		[
			{
				format: (name: string) =>
					name.trim().toLocaleLowerCase("en-US"),
				message: "Name",
				name: "name",
				type: "text",
				validate: isValidPackageName,
			},
			{
				format: (description: string) => description.trim(),
				message: "Description",
				name: "description",
				type: "text",
				validate: hasValidLength(1)(58),
			},
		],
		{ onCancel: () => Promise.reject("Cancelled") },
	);
