import { suite } from "@vangware/test";
import { greet } from "../src/index.js";

export default suite([
	{
		given: "a name",
		must: "greet that name",
		received: greet("Vangware"),
		wanted: "Hello, Vangware!",
	},
]);
