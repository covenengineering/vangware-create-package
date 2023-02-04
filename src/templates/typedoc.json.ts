import type { TemplateData } from "../types/TemplateData.js";
import { userClean } from "../userClean.js";

export default ({ name }: TemplateData) =>
	JSON.stringify(
		{
			$schema: "https://typedoc.org/schema.json",
			cname: `${userClean(name)}.vangware.com`,
			entryPoints: ["./lib"],
			extends: ["@vangware/configs/typedoc.json"],
			name,
		},
		undefined,
		"	",
	);
