export const removeUnnecessarySpaces = (line) => {
	return line.split(' ').filter(item => item).join(' ');
};