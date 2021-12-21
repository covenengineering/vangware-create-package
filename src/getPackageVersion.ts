import { readFile } from "node:fs/promises";
import { sourceURL } from "./sourceURL.js";

export const getPackageVersion = () =>
	readFile(sourceURL("../package.json"), "utf-8")
		.then(JSON.parse)
		.then(({ version }: { readonly version: string }) => version);
