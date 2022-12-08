import { stat } from 'node:fs/promises';

export const checkDirectoryExistence = async (path) => {
	try {
		const stats = await stat(path);
		return stats.isDirectory();
	} catch(err) {
		return false;
	}
};

