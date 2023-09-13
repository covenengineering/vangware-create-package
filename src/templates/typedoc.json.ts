import type { Answers } from "../types/Answers.js";
import { userClean } from "../userClean.js";

export default ({ name }: Answers) =>
	JSON.stringify(
		{
			$schema: "https://typedoc.org/schema.json",
			cname: `${userClean(name)}.vangware.com`,
			entryPoints: ["./src"],
			extends: ["@vangware/configs/typedoc.config.json"],
			name,
		},
		undefined,
		"	",
	);
