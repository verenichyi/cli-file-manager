import { up, cd, ls } from '../domains/nwd/index.js';
import { removeUnnecessarySpaces } from './removeUnnecessarySpaces.js';
import { validateLine } from './validateLine.js';
import { compressionFlags, executionErrorMsg } from '../constants.js';
import { getCwdMsg } from './getCwdMsg.js';
import { handleOs } from '../domains/os/index.js';
import { calcHash } from '../domains/hash/index.js';
import { handleCompression } from '../domains/compression/index.js';
import { cat, add } from '../domains/files/index.js';

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
				const [ path ] = args;
				await calcHash(path);
				break;
			}
			case 'compress': {
				const [ src, dest ] = args;
				await handleCompression(src, dest);
				break;
			}
			case 'decompress': {
				const [ src, dest ] = args;
				await handleCompression(src, dest, decompress);
				break;
			}
			case 'cat': {
				const [ path ] = args;
				await cat(path);
				break;
			}
			case 'add': {
				const [ filename ] = args;
				await add(filename);
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