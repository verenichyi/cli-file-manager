import { readdir } from 'node:fs/promises';
import { sortByField } from '../../helpers/sortByField.js';

export const ls = async () => {
	const cwd = process.cwd();
	const cwdEntities = await readdir(cwd, {withFileTypes: true});
	const files = [];
	const directories = [];

	for (const cwdEntity of cwdEntities) {
		const isFile = cwdEntity.isFile();
		const entity = {
			Name: cwdEntity.name,
			Type: isFile ? 'file' : 'directory'
		};

		if (isFile) {
			files.push(entity);
		} else {
			directories.push(entity);
		}
	}

	const identifiedEntities = [
		...sortByField(directories, 'Name'),
		...sortByField(files, 'Name')
	];
	console.table(identifiedEntities);
};