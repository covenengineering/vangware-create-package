import { USER } from "./constants";

export const userClean = (name: string) => name.replace(`@${USER}/`, "");
