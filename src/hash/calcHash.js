import { createHash } from 'crypto';
import fs from 'fs';

const calculateHash = async () => {
  // const content = await fs.readFile('./src/hash/files/fileToCalculateHashFor.txt', 'utf-8');
  //
  // const hex = createHash('sha256').update(content).digest('hex');
  // console.log(hex);

  const hmac = createHash('sha256');

  const input = fs.createReadStream('./src/hash/files/fileToCalculateHashFor.txt');
  input.pipe(hmac).pipe(process.stdout);
};

await calculateHash();
