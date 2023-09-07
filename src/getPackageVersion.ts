import { readFile } from "node:fs/promises";
import { sourceURL } from "./sourceURL.js";
import type { PackageConfiguration } from "./types/PackageConfiguration.js";

export const getPackageConfiguration = () =>
	readFile(
		sourceURL(`${import.meta.url}/../../package.json`),
		"utf-8",
	).then<PackageConfiguration>(JSON.parse);
