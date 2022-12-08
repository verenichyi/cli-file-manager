import { EOL, homedir, userInfo, arch } from 'node:os';
import { handleCpus } from './handleCpus.js';

export const os = async (arg) => {
	switch (arg) {
		case '--EOL':
			console.log(JSON.stringify(EOL));
			break;
		case '--cpus':
			handleCpus();
			break;
		case '--homedir':
			console.log(homedir());
			break;
		case '--username':
			console.log(userInfo().username);
			break;
		case '--architecture':
			console.log(arch());
			break;
	}
};