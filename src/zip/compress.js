import { createGzip } from 'node:zlib';
import fs from 'fs';

const compress = async () => {
  // TODO - check if right. How to gzip file with changed file name

  const gzip = createGzip();
  fs.createReadStream('./src/zip/files/fileToCompress.txt')
      .pipe(gzip)
      .pipe(fs.createWriteStream('./src/zip/files/fileToCompress.txt.gz'));
};

await compress();
