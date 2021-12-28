import { foregroundGray, foregroundGreen, underlined } from "@vangware/ansi";
import { USER } from "./constants.js";
import type { Answers } from "./types/Answers.js";

const git = foregroundGreen("git");

const gitURL = (name: string) =>
	underlined(`git@github.com:${USER}/${name.replace(`@${USER}/`, "")}.git`);

export const doneMessage = ({ name }: Answers) => `
	Done! ✨

	${foregroundGreen("cd")} ${underlined(`./${name}`)}
	${git} init
	${git} remote add origin ${gitURL(name)}
	${git} branch -M main
	${foregroundGreen("npm")} i ${foregroundGray("# or pnpm or yarn")}
`;
