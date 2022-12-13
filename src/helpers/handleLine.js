import { up, cd, ls } from '../domains/nwd/index.js';
import { validateLine } from './validateLine.js';
import { compressionFlags, executionErrorMsg } from '../constants.js';
import { getCwdMsg } from './getCwdMsg.js';
import { handleOs } from '../domains/os/index.js';
import { calcHash } from '../domains/hash/index.js';
import { handleCompression } from '../domains/compression/index.js';
import { cat, add, rn, move, rm } from '../domains/files/index.js';
import { parseLine } from './index.js';

const { decompress } = compressionFlags;

export const handleLine = async (line) => {
	try {
		const [ command, args ] = parseLine(line);
		// validateLine(command: string, args: arg[]);

		switch (command) {
			case 'up': {
				up();
				break;
			}
			case 'cd': {
				cd(...args);
				break;
			}
			case 'ls': {
				await ls();
				break;
			}
			case 'cat': {
				await cat(...args);
				break;
			}
			case 'add': {
				await add(...args);
				break;
			}
			case 'rn': {
				await rn(...args);
				break;
			}
			case 'cp': {
				await move(...args, true);
				break;
			}
			case 'mv': {
				await move(...args);
				break;
			}
			case 'rm': {
				await rm(...args);
				break;
			}
			case 'os': {
				await handleOs(...args);
				break;
			}
			case 'hash': {
				await calcHash(...args);
				break;
			}
			case 'compress': {
				await handleCompression(...args);
				break;
			}
			case 'decompress': {
				await handleCompression(...args, decompress);
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