import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  process.stdin.pipe(fs.createWriteStream(`${ __dirname }/files/fileToWrite.txt`));
};

await write();
