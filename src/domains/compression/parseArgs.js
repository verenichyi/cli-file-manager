import { parse, resolve } from 'node:path';
import { brotliExtension, compressionFlags } from '../../constants.js';

const { compress, decompress } = compressionFlags;

export const parseArgs = (file, dest, flag) => {
	let resolvedDestPath;
	const resolvedFilePath = resolve(file);
	const { name, ext } = parse(resolvedFilePath);

	switch (flag) {
		case compress:
			resolvedDestPath = resolve(dest, `${name}${ext}${brotliExtension}`);
			break;
		case decompress:
			resolvedDestPath = resolve(dest, name);
			break;
	}

	return [resolvedFilePath, resolvedDestPath];
};
