import { pathToURL } from "./pathToURL.js";
import type { Path } from "./types/Path.js";

export const createURL = (base: Path) => (path: Path) =>
	new URL(pathToURL(path), pathToURL(base));
