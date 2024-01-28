import fs from 'fs/promises';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  try {
    const files = await fs.readdir(`${ __dirname }/files`, { recursive: true });
    console.log(files);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await list();
