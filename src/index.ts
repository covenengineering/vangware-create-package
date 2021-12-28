#!/usr/bin/env node

import { copyBase } from "./copyBase.js";
import { copyTemplates } from "./copyTemplates.js";
import { createDirectory } from "./createDirectory.js";
import { doneMessage } from "./doneMessage.js";
import { getPackageDevDependencies } from "./getPackageDevDependencies.js";
import { getPackageVersion } from "./getPackageVersion.js";
import { prompt } from "./prompt.js";

export default getPackageVersion()
	.then(version => console.log(`@vangware/create-package v${version}`))
	.then(prompt)
	.then(answers =>
		createDirectory(answers.name)
			.then(copyBase(answers.name))
			.then(getPackageDevDependencies)
			.then(devDependencies =>
				copyTemplates({ ...answers, devDependencies }),
			)
			.then(() => answers),
	)
	.then(doneMessage)
	.catch(console.error);
