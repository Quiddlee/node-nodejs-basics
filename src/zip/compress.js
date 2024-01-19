import { createGzip } from 'node:zlib';
import fs from 'fs';

const compress = async () => {
  fs.createReadStream('./src/zip/files/fileToCompress.txt')
      .pipe(createGzip())
      .pipe(fs.createWriteStream('./src/zip/files/archive.gz'));
};

await compress();
