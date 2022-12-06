import { closeProcess } from './closeProcess.js';
import { getCurrentDirectory } from './getCurrentDirectory.js';

export const handleOnDataStdin = (data, message) => {
	const chunkStringified = data.toString();
	if (chunkStringified.includes('.exit')) {
		closeProcess(message);
	}

	process.stdout.write(getCurrentDirectory());
};