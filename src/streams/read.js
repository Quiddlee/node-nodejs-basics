import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  fs.createReadStream(`${ __dirname }/files/fileToRead.txt`).pipe(process.stdout);
};

await read();
