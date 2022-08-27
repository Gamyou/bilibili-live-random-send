debugger;
import workerTimer from './WorkTimer.js';
debugger;
const currentInterval = workerTimer.setInterval(() => {
    console.log('===================================================');
}, 3000);
debugger;
workerTimer.setTimeout(() => {
    console.warn('-----------------------------------------> 撤销Interval ', currentInterval);
    workerTimer.clearInterval(currentInterval);
}, 30000);