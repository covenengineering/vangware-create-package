#!/usr/bin/env node

import { bold } from "@vangware/ansi";
import { question } from "@vangware/prompts";
import { createInterface } from "node:readline/promises";
import { copyBase } from "./copyBase.js";
import { copyTemplates } from "./copyTemplates.js";
import { createDirectory } from "./createDirectory.js";
import { doneMessage } from "./doneMessage.js";
import { getPackageDevDependencies } from "./getPackageDevDependencies.js";
import { getPackageVersion } from "./getPackageVersion.js";
import { gitIgnoreFix } from "./gitIgnoreFix.js";
import { hasValidLength } from "./validations/hasValidLength.js";
import { isValidPackageName } from "./validations/isValidPackageName.js";

const readlineInterface = createInterface({
	input: process.stdin,
	output: process.stdout,
});

export default getPackageVersion()
	// eslint-disable-next-line no-console
	.then(version => console.log(bold`@vangware/create-package v${version}\n`))
	.then(() =>
		question({
			format: (name: string) => name.trim().toLocaleLowerCase("en-US"),
			query: bold`Name:`,
			readlineInterface,
			retry: true,
			validate: isValidPackageName,
		}),
	)
	.then(name =>
		createDirectory(name)
			.then(copyBase(name))
			.then(gitIgnoreFix(name))
			.then(getPackageDevDependencies)
			.then(devDependencies =>
				question({
					format: (description: string) => description.trim(),
					query: bold`Description:`,
					readlineInterface,
					retry: true,
					validate: hasValidLength(1)(58),
				}).then(description => ({
					description,
					devDependencies,
					name,
				})),
			)
			.then(copyTemplates),
	)
	.then(doneMessage)
	// eslint-disable-next-line no-console
	.then(console.log)
	// eslint-disable-next-line no-console
	.catch(console.error)
	.finally(() => readlineInterface.close());
