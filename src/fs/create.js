import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  await fs.writeFile(`${ __dirname }/files/fresh.txt`, 'I am fresh and young', { flag: 'wx' }, (err) => {
    if (err && err.code === 'EEXIST') {
      throw new Error('FS operation failed');
    }
  });
};

await create();
