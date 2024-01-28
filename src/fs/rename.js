import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  fs.rename(`${ __dirname }/files/wrongFilename.txt`, `${ __dirname }/files/properFilename.md`, err => {
    if (err) {
      throw new Error('FS operation failed');
    }
  });
};

await rename();
