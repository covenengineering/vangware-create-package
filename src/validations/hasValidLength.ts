export const hasValidLength =
	(minimum: number) =>
	(maximum: number) =>
	({ length }: string) =>
		length >= minimum && length <= maximum;
