import { Transform } from 'stream';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _encoding, callback) {
      callback(null, `${ String(chunk).split('').reverse().join('') }\n`);
    }
  });

  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
