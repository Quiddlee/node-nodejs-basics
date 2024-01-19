import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCRIPT_PATH = path.join(__dirname, 'files/script.js');

const spawnChildProcess = async (args) => {
  const child = fork(SCRIPT_PATH, args, { stdio: [ 'inherit', 'pipe', 'ignore', 'ipc' ] });
  child.stdout.on('data', (data) => {
    console.log(`Hello from master process 👋: ${ data.toString() }`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([ 'someArgument1', 'someArgument2' ]);
