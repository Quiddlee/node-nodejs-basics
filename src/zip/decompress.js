import { createGunzip } from 'zlib';
import fs from 'fs';

const decompress = async () => {
  fs.createReadStream('./src/zip/files/archive.gz')
      .pipe(createGunzip())
      .pipe(fs.createWriteStream('./src/zip/files/fileToCompress.txt'));
};

await decompress();
