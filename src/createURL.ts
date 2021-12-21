import type { URLOrString } from "./types/URLOrString.js";

export const createURL = (base: URLOrString) => (path: URLOrString) =>
	new URL(path, base);
