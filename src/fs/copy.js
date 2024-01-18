import fs from 'fs';

const copy = async () => {
  fs.cp('./src/fs/files', './src/fs/files_copy', { recursive: true, force: false, errorOnExist: true }, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }
  });
};

await copy();
