import { copyFile, readdir } from "node:fs/promises";
import { createDirectory } from "./createDirectory.js";
import { createURL } from "./createURL.js";
import type { Path } from "./types/Path.js";

export const copy = (from: Path) => (to: Path) => {
	const createURLTo = createURL(to);
	const createURLFrom = createURL(from);

	return (): Promise<void> =>
		readdir(from, { withFileTypes: true }).then(files =>
			Promise.all(
				files.flatMap(file =>
					file.isDirectory()
						? createDirectory(createURLTo(file.name)).then(
								copy(createURLFrom(`${file.name}/`))(
									createURLTo(`${file.name}/`),
								),
						  )
						: copyFile(
								createURLFrom(file.name),
								createURLTo(file.name),
						  ),
				),
			).then(() => undefined),
		);
};
