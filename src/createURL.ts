import type { Path } from "./types/Path.js";

export const createURL = (base: Path) => (path: Path) => new URL(path, base);
