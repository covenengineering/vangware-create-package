import { mkdir } from "node:fs/promises";
import { pathToURL } from "./pathToURL.js";
import type { Path } from "./types/Path.js";

export const createDirectory = (name: Path) =>
	mkdir(pathToURL(name), { recursive: true });
