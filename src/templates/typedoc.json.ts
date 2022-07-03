import type { TemplateData } from "../types/TemplateData.js";
import { userClean } from "../userClean.js";

export default ({ name }: TemplateData) =>
	JSON.stringify({
		cleanOutputDir: false,
		cname: `${userClean(name)}.vangware.com`,
		customCss: "./node_modules/@vangware/configs/typedoc.css",
		entryPoints: ["./src/index.ts"],
		gitRevision: "main",
		hideGenerator: true,
		logLevel: "Warn",
	});
