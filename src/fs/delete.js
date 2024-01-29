import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  fs.rm(`${ __dirname }/files/fileToRemove.txt`, err => {
    if (err) {
      throw new Error('FS operation failed');
    }
  });
};

await remove();
