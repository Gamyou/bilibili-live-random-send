import workerTimer from './WorkTimer.js';
const currentInterval = workerTimer.setInterval(() => {
    console.log('===================================================');
}, 3000);
workerTimer.setTimeout(() => {
    console.warn('-----------------------------------------> 撤销Interval ', currentInterval);
    workerTimer.clearInterval(currentInterval);
}, 30000);