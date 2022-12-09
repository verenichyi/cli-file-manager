import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { compressionFlags } from '../../constants.js';
import { parseArgs } from './parseArgs.js';

const { compress, decompress } = compressionFlags;

export const handleCompression = async (file, dest, flag = compress) => {
	const [ srcFile, destFile ] = parseArgs(file, dest, flag);

	let brotli;
	const rs = createReadStream(srcFile);
	const ws = createWriteStream(destFile);

	switch (flag) {
		case compress:
			brotli = createBrotliCompress();
			break;
		case decompress:
			brotli = createBrotliDecompress();
			break;
	}

	await pipeline(rs, brotli, ws);
};