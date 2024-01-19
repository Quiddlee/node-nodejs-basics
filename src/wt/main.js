import os from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workerPath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
  // Write your code here
  const cpuCores = os.cpus();
  const workersQueue = [];

  cpuCores.forEach((_core, i) => {
    const worker = new Worker(workerPath, { workerData: i + 10 });

    workersQueue.push(
        new Promise((resolve, reject) => {
          worker.on('message', (data) => resolve(data));
          worker.on('error', (err) => reject(err));
        })
    );
  });

  const workerResults = await Promise.allSettled(workersQueue);
  const result = workerResults.map(res => {
    if (res.status === 'fulfilled') {
      return {
        status: 'resolved',
        data: res.value
      };
    }

    return {
      status: 'error',
      data: null
    };
  });

  console.log(result);
};

await performCalculations();
