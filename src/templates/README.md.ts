import type { TemplateData } from "../types/TemplateData.js";

export default ({ name, description }: TemplateData) => `# ${name}

${description}

<!-- Reference -->

[vangware]: https://vangware.com
`;
