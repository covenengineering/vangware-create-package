#!/usr/bin/env node

import { copyBase } from "./copyBase.js";
import { copyTemplates } from "./copyTemplates.js";
import { createDirectory } from "./createDirectory.js";
import { getPackageVersion } from "./getPackageVersion.js";
import { prompt } from "./prompt.js";

export default getPackageVersion()
	.then(version => console.log(`@vangware/create-package v${version}`))
	.then(prompt)
	.then(answers =>
		createDirectory(answers.name)
			.then(copyBase(answers.name))
			.then(copyTemplates(answers)),
	)
	.then(() => console.log("Done!"))
	.catch(console.error);
