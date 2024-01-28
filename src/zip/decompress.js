import { createGunzip } from 'zlib';
import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  fs.createReadStream(`${ __dirname }/files/archive.gz`)
      .pipe(createGunzip())
      .pipe(fs.createWriteStream(`${ __dirname }/files/fileToCompress.txt`));
};

await decompress();
