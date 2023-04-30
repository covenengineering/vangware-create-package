import { HOST, USER } from "../constants.js";
import type { Answers } from "../types/Answers.js";
import { userClean } from "../userClean.js";

export default ({ name, description }: Answers) => {
	const path = `${USER}/${userClean(name)}`;

	return `<img id="logo" alt="${userClean(
		name,
	)} by ${USER}" src="./logo.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

${description}

## Usage

### 📦 Node

Install \`${name}\` as a dependency:

\`\`\`bash
pnpm add ${name}
# or
npm install ${name}
# or
yarn add ${name}
\`\`\`

Import it and use it:

\`\`\`typescript
import { greet } from "${name}";

greet("Vangware"); // "Hello, Vangware!"
\`\`\`

### 🦕 Deno

Import \`${name}\` using the \`npm:\` prefix, and use it directly:

\`\`\`typescript
import { greet } from "npm:${name}";

greet("Vangware"); // "Hello, Vangware!"
\`\`\`

### 🌎 Browser

Import \`${name}\` using [esm.sh][esm.sh], and use it directly:

\`\`\`html
<script type="module">
	import { greet } from "https://esm.sh/${name}";

	greet("Vangware"); // "Hello, Vangware!"
</script>
\`\`\`

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]: https://${HOST}/${path}/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/${path}.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/${path}
[coverage]: https://coveralls.io/github/${path}
[documentation]: https://${userClean(name)}.${USER}.com
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/${name}.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://${HOST}/${path}/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/${name}.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/${name}
[open-issues-badge]:
	https://img.shields.io/github/issues/${path}.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://${HOST}/${path}/issues
[vangware]: https://vangware.com
`;
};
