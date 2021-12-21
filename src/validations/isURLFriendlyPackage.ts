import { isURLFriendly } from "./isURLFriendly.js";

export const isURLFriendlyPackage = (packageName: string) => {
	const { groups: { namespace = "", namespacedPackageName = "" } = {} } =
		packageName.match(
			/^(?:@(?<namespace>[^/]+?)[/])?(?<namespacedPackageName>[^/]+?)$/u,
		) ?? [];

	return namespace !== "" && namespacedPackageName !== ""
		? [namespace, namespacedPackageName].every(isURLFriendly)
		: isURLFriendly(packageName);
};
