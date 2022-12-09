import { up, cd, ls } from '../domains/nwd/index.js';
import { removeUnnecessarySpaces } from './removeUnnecessarySpaces.js';
import { validateLine } from './validateLine.js';
import { compressionFlags, executionErrorMsg } from '../constants.js';
import { getCwdMsg } from './getCwdMsg.js';
import { handleOs } from '../domains/os/index.js';
import { calcHash } from '../domains/hash/index.js';
import { handleCompression } from '../domains/compression/index.js';

const { decompress } = compressionFlags;

export const handleLine = async (line) => {
	try {
		const properLine = removeUnnecessarySpaces(line);
		// implement const parseLine = (line: string):(command, arg[])[]=>{}
		// validateLine(command: string, args: arg[]);
		const [ command, ...args ] = properLine.split(' ');

		switch (command) {
			case 'up': {
				up();
				break;
			}
			case 'cd': {
				const [ path ] = args;
				cd(path);
				break;
			}
			case 'ls': {
				await ls();
				break;
			}
			case 'os': {
				const [ arg ] = args;
				await handleOs(arg);
				break;
			}
			case 'hash': {
				const [ file ] = args;
				await calcHash(file);
				break;
			}
			case 'compress': {
				const [ file, dest ] = args;
				await handleCompression(file, dest);
				break;
			}
			case 'decompress': {
				const [ file, dest ] = args;
				await handleCompression(file, dest, decompress);
				break;
			}
		}
	} catch (error) {
		if (error instanceof SyntaxError) {
			process.stdout.write(error.message);
		} else {
			process.stdout.write(executionErrorMsg);
		}
	} finally {
		process.stdout.write(getCwdMsg());
	}
};