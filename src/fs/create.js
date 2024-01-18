import fs from 'fs';

const create = async () => {
  await fs.writeFile('./src/fs/files/fresh.txt', 'I am fresh and young', { flag: 'wx' }, (err) => {
    if (err && err.code === 'EEXIST') {
      throw new Error('FS operation failed');
    }
  });
};

await create();
