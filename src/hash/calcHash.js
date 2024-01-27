import { createHash } from 'crypto';
import fs from 'fs';

const calculateHash = async () => {
  fs.createReadStream('./src/hash/files/fileToCalculateHashFor.txt')
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
