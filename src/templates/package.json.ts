import { HOST, USER } from "../constants.js";
import type { Answers } from "../types/Answers.js";

export default ({ name, description }: Answers) =>
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
			bugs: `${HOST}/${USER}/${name}/issues`,
			exports: {
				import: "./dist/import/index.js",
				require: "./dist/require/index.js",
			},
			files: ["dist"],
			homepage: `${HOST}/${USER}/${name}#readme`,
			keywords: ["typescript", "vangware"],
			license: "MIT",
			repository: {
				type: "git",
				url: `${HOST}/${USER}/${name}`,
			},
			scripts: {
				clean: "rimraf ./dist",
				compile: "tsc --project ./tsconfig.dist.json",
				document: "typedoc",
				lint: "eslint ./src/*.ts",
				"lint:fix": "eslint {src,tests}/**/*.ts --fix",
				prepublishOnly: "run-s clean compile prettify",
				prettify:
					"prettier --write --loglevel warn './dist/**/*.{js,ts}'",
			},
			types: "./dist/import/index.d.ts",
		},
		undefined,
		"	",
	);
