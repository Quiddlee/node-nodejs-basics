import fs from 'fs';

const read = async () => {
  fs.createReadStream('./src/streams/files/fileToRead.txt').pipe(process.stdout);
};

await read();
