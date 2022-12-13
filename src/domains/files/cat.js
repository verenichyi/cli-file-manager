import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { Writable } from 'node:stream';

const createWs = () => {
	return new Writable({
		write(chunk, encoding, callback) {
			console.log(chunk.toString());
			callback();
		}
	});
};

export const cat = async (path) => {
	const resolvedPath = resolve(path);
	const rs = createReadStream(resolvedPath);

	await pipeline(rs, createWs());
};