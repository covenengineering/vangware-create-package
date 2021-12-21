import type { Answers } from "../types/Answers.js";

export default ({ name, description }: Answers) => `# ${name}

${description}

<!-- Reference -->

[vangware]: https://vangware.com
`;
