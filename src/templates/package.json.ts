import { HOST, USER } from "../constants.js";
import type { TemplateData } from "../types/TemplateData.js";
import { userClean } from "../userClean.js";

export default ({ name, description, devDependencies }: TemplateData) =>
	JSON.stringify(
		{
			name,
			// eslint-disable-next-line sort-keys
			description,
			version: "1.0.0",
			// eslint-disable-next-line sort-keys
			author: {
				email: "hello@vangware.com",
				name: "Vangware",
				url: "https://vangware.com",
			},
			bugs: `${HOST}/${USER}/${userClean(name)}/issues`,
			devDependencies: Object.fromEntries(
				[
					"@types/eslint",
					"@types/node",
					"@types/prettier",
					"@typescript-eslint/eslint-plugin",
					"@typescript-eslint/parser",
					"@vangware/configs",
					"@vangware/test",
					"@vangware/types",
					"c8",
					"cross-env",
					"eslint",
					"eslint-config-prettier",
					"eslint-import-resolver-node",
					"eslint-plugin-ban",
					"eslint-plugin-functional",
					"eslint-plugin-import",
					"eslint-plugin-no-null",
					"eslint-plugin-prefer-arrow",
					"eslint-plugin-prettier",
					"npm-run-all",
					"prettier",
					"rimraf",
					"ts-node",
					"typedoc",
					"typescript",
				].map(key => [key, devDependencies[key]]),
			),
			exports: {
				".": "./dist/index.js",
			},
			files: ["dist"],
			homepage: `${HOST}/${USER}/${userClean(name)}#readme`,
			keywords: ["typescript", "vangware"],
			license: "MIT",
			repository: {
				type: "git",
				url: `${HOST}/${USER}/${userClean(name)}.git`,
			},
			scripts: {
				clean: "rimraf ./dist",
				compile: "tsc --project ./tsconfig.dist.json",
				document: "typedoc",
				lint: "eslint {src,tests}/*.ts",
				"lint:fix": "eslint {src,tests}/**/*.ts --fix",
				"pre-compile": "tsc --noEmit --project tsconfig.dist.json",
				prepublishOnly: "run-s clean compile prettify",
				prettify:
					"prettier --write --loglevel warn './dist/**/*.{js,ts}'",
				test: "cross-env NODE_OPTIONS='--loader ts-node/esm' c8 test",
			},
			type: "module",
			types: "./dist/index.d.ts",
		},
		undefined,
		"	",
	);
