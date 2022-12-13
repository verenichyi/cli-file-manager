import { createReadStream, createWriteStream } from 'node:fs';
import { unlink } from 'node:fs/promises';
import { parse, resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';

export const move = async (pathToFile, pathToNewDirectory, isSrcRemain = false) => {
	const resolvedPathToFile = resolve(pathToFile);
	const { base } = parse(resolvedPathToFile);
	const resolvedPathToNewFile = resolve(pathToNewDirectory, base);

	const rs = createReadStream(resolvedPathToFile);
	const ws = createWriteStream(resolvedPathToNewFile);

	await pipeline(rs, ws);

	if (!isSrcRemain) {
		await unlink(resolvedPathToFile);
	}
};

console.log(resolve('test/test.txt'));
console.log(resolve('..', 'test.txt'));