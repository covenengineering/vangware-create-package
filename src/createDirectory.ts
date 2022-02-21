import { mkdir } from "node:fs/promises";
import type { Path } from "./types/Path.js";

export const createDirectory = (name: Path) => mkdir(name, { recursive: true });
