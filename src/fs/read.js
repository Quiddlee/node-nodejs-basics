import fs from 'fs/promises';

const read = async () => {
  try {
    const content = await fs.readFile('./src/fs/files/fileToRead.txt', 'utf-8');
    console.log(content);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await read();
