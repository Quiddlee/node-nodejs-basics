import { createGzip } from 'node:zlib';
import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  fs.createReadStream(`${ __dirname }/files/fileToCompress.txt`)
      .pipe(createGzip())
      .pipe(fs.createWriteStream(`${ __dirname }/files/archive.gz`));
};

await compress();
