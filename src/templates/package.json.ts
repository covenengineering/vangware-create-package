import type { KeyOf, ReadOnlyArray } from "@vangware/types";
import { HOST, USER } from "../constants.js";
import type { Answers } from "../types/Answers.js";
import { userClean } from "../userClean.js";

export default ({
	name,
	description,
	packageConfiguration: {
		author,
		bugs: { email },
		devDependencies,
		engines,
	},
}: Answers) => {
	const path = `${HOST}/${USER}/${userClean(name)}`;

	return JSON.stringify(
		{
			name,
			// eslint-disable-next-line sort-keys
			description,
			version: "1.0.0",
			// eslint-disable-next-line sort-keys
			author,
			bugs: {
				email,
				url: `${path}/issues`,
			},
			devDependencies: Object.fromEntries(
				(
					[
						"@types/node",
						"@vangware/configs",
						"@vangware/test",
						"@vangware/types",
						"c8",
						"eslint",
						"npm-run-all",
						"prettier",
						"rimraf",
						"simple-git-hooks",
						"tsx",
						"typescript",
					] satisfies ReadOnlyArray<KeyOf<typeof devDependencies>>
				).map(key => [key, devDependencies[key]]),
			),
			engines,
			exports: {
				".": "./dist/index.js",
				"./*": "./dist/*",
			},
			files: ["dist"],
			homepage: `${path}#readme`,
			keywords: ["typescript", "vangware"],
			license: "MIT",
			repository: {
				type: "git",
				url: `${path}.git`,
			},
			scripts: {
				clean: "rimraf ./dist",
				compile: "tsc --project ./tsconfig.dist.json",
				lint: "eslint {src,tests}",
				"lint:fix": "eslint {src,tests} --fix",
				"pre-compile": "tsc --noEmit --project tsconfig.dist.json",
				prepare: "simple-git-hooks",
				prepublishOnly: "run-s --print-label clean compile prettify",
				prettify:
					"prettier --ignore-path=.prettierignore --log-level=warn --write './dist/**/*.{js,ts}'",
				test: "NODE_OPTIONS='--loader tsx --no-warnings' c8 test",
			},
			sideEffects: false,
			"simple-git-hooks": {
				"pre-push":
					"$(pwd)/node_modules/.bin/run-s --print-label clean pre-compile lint test",
			},
			type: "module",
			types: "./dist/index.d.ts",
		},
		undefined,
		"	",
	);
};
