#!/usr/bin/env node

import { bold } from "@vangware/ansi";
import { copyBase } from "./copyBase.js";
import { copyTemplates } from "./copyTemplates.js";
import { createDirectory } from "./createDirectory.js";
import { doneMessage } from "./doneMessage.js";
import { getPackageDevDependencies } from "./getPackageDevDependencies.js";
import { getPackageVersion } from "./getPackageVersion.js";
import { prompt } from "./prompt.js";

export default getPackageVersion()
	// eslint-disable-next-line no-console
	.then(version => console.log(bold`@vangware/create-package v${version}\n`))
	.then(prompt)
	.then(answers =>
		createDirectory(answers.name)
			.then(copyBase(answers.name))
			.then(getPackageDevDependencies)
			.then(devDependencies => ({ ...answers, devDependencies }))
			.then(copyTemplates)
			.then(() => answers),
	)
	.then(doneMessage)
	// eslint-disable-next-line no-console
	.then(console.log)
	// eslint-disable-next-line no-console
	.catch(console.error);
