import { closeProcess } from './closeProcess.js';
import { handleLine } from './handleLine.js';

export const handleStdinOnData = (chunk, message) => {
	const chunkStringified = chunk.toString().trim();
	if (chunkStringified.includes('.exit')) {
		closeProcess(message);
	}

	handleLine(chunkStringified);
};