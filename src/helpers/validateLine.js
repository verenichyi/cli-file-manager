import { commandsList, validationErrorMsg } from '../constants.js';
// should be const validateLine = (command: string, args: arg[]):void => {}
export const validateLine = (line) => {
	const [command, ...args] = line.split(' ');

	if (!commandsList.includes(command)) {
		throw new SyntaxError(validationErrorMsg);
	}

	switch (command) {
		case 'up':
		case 'ls': {
			if (!args.length) {
				return;
			}
			break;
		}
		case 'cd':
		case 'os':
		case 'hash':{
			if (args.length === 1) {
				return;
			}
			break;
		}
	}

	throw new SyntaxError(validationErrorMsg);
};