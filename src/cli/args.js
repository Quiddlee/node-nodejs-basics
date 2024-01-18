const parseArgs = () => {
  let cache;

  console.log(
      process.argv
          .slice(2)
          .map((value, i) => {
            if (i % 2 === 0) {
              cache = value;
              return;
            }

            return `${ cache } is ${ value }`;
          })
          .filter(Boolean)
          .join(', ')
  );
};

parseArgs();
