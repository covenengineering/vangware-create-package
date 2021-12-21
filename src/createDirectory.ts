import { mkdir } from "node:fs/promises";
import type { URLOrString } from "./types/URLOrString.js";

export const createDirectory = (name: URLOrString) =>
	mkdir(name, { recursive: true });
