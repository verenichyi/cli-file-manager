import { homedir } from 'node:os';
import { getUsernameFromArgv, getCurrentDirectory, closeProcess, handleOnDataStdin } from './helpers/index.js';

const username = getUsernameFromArgv();
const greetingMsg = `Welcome to the File Manager, ${username}!\n`;
const goodbyeMsg = `Thank you for using File Manager, ${username}, goodbye!`;

process.chdir(homedir());
process.stdout.write(greetingMsg);
process.stdout.write(getCurrentDirectory());

process.stdin.on('data', (data) => handleOnDataStdin(data, goodbyeMsg));
process.on('SIGINT', () => closeProcess(goodbyeMsg));