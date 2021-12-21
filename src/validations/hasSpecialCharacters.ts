export const hasSpecialCharacters = (value: string) =>
	/[~'!()*]/u.test(value.split("/").slice(-1)[0] ?? "");
