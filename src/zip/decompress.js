import { createGunzip } from 'zlib';
import fs from 'fs';

const decompress = async () => {
  // TODO - check if right. Should we delete the initial file??
  fs.createReadStream('./src/zip/files/fileToCompress.txt.gz')
      .pipe(createGunzip())
      .pipe(fs.createWriteStream('./src/zip/files/fileToCompress.txt'));
};

await decompress();
