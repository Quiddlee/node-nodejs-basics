import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  fs.cp(`${ __dirname }/files`, `${ __dirname }/files_copy`, {
    recursive: true,
    force: false,
    errorOnExist: true
  }, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }
  });
};

await copy();
