import fs from 'fs/promises';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  try {
    const content = await fs.readFile(`${ __dirname }/files/fileToRead.txt`, 'utf-8');
    console.log(content);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await read();
