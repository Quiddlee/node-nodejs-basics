import { createHash } from 'crypto';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  fs.createReadStream(`${__dirname}/files/fileToCalculateHashFor.txt`)
      .on('error', () => {
        throw new Error('FS operation failed');
      })
      .pipe(
          createHash('sha256')
      )
      .setEncoding('hex')
      .pipe(process.stdout);
};

await calculateHash();
