import os from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORKER_PATH = path.join(__dirname, 'worker.js');
const CPU_CORES = os.cpus();

const performCalculations = async () => {
  const workersQueue = CPU_CORES.map((_core, i) =>
      new Promise((resolve, reject) =>
          new Worker(WORKER_PATH, { workerData: i + 10 })
              .on('message', resolve)
              .on('error', reject)
      )
  );

  const workersResults = await Promise.allSettled(workersQueue);
  const result = workersResults.map(res => {
    const isFulfilled = res.status === 'fulfilled';

    return {
      status: isFulfilled ? 'resolved' : 'error',
      data: isFulfilled ? res.value : null,
    };
  });

  console.log(result);
};

await performCalculations();
