// Build a worker from an anonymous function body
const blobURL = URL.createObjectURL(
    new Blob(
        [
            '(',
            function () {
                const intervalIds = {};
                const timeoutIds = {};
                // 监听message 开始执行定时器或者销毁
                self.onmessage = (e) => {
                    console.warn('========================> worker接收到事件信息', e);
                    switch (e.data.command) {
                        case 'interval:start': // 开启定时器
                            console.warn('========================> 开启Interval操作', intervalIds);
                            const intervalId = setInterval(() => postMessage({ message: 'interval:tick', id: e.data.id }), e.data.interval);
                            // postMessage({ message: 'interval:started', id: e.data.id });
                            intervalIds[e.data.id] = intervalId;
                            console.warn('========================> 开启Interval完成', intervalIds);
                            break;
                        case 'interval:clear': // 销毁
                        console.warn('========================> 销毁Interval操作', intervalIds);
                            clearInterval(intervalIds[e.data.id]);
                            postMessage({ message: 'interval:cleared', id: e.data.id });
                            delete intervalIds[e.data.id];
                            console.warn('========================> 销毁Interval完成', intervalIds);
                            break;
                        case 'timeout:start':
                            console.warn('========================> 开启Timeout操作', timeoutIds);
                            const timeoutId = setTimeout(() => postMessage({ message: 'timeout:tick', id: e.data.id }), e.data.timeout);
                            // postMessage({ message: 'timeout:started', id: e.data.id });
                            timeoutIds[e.data.id] = timeoutId;
                            console.warn('========================> 开启Timeout完成', timeoutIds);
                            break;
                        case 'timeout:clear':
                            console.warn('========================> 开启Timeout操作', timeoutIds);
                            clearTimeout(timeoutIds[e.data.id]);
                            postMessage({ message: 'timeout:cleared', id: e.data.id });
                            delete timeoutIds[e.data.id];
                            console.warn('========================> 开启Timeout完成', timeoutIds);
                            break;
                    }
                };
            }.toString(),
            ')()',
        ],
        { type: 'application/javascript' },
    ),
);

const worker = new Worker(blobURL);
URL.revokeObjectURL(blobURL); //用完释放URL对象

const workerTimer = {
    id: 0,
    callbacks: {},
    setInterval: (cb, interval, context) => {
        debugger;
        const id = ++this.id;
        this.callbacks[id] = { fn: cb, context: context };
        worker.postMessage({ command: 'interval:start', interval: interval, id: id });
        return id;
    },
    setTimeout: (cb, timeout, context) => {
        const id = ++this.id;
        this.callbacks[id] = { fn: cb, context: context };
        worker.postMessage({ command: 'timeout:start', timeout: timeout, id: id });
        return id;
    },

    // 监听worker 里面的定时器发送的message 然后执行回调函数
    onMessage: (e) => {
        switch (e.data.message) {
            case 'interval:tick':
            case 'timeout:tick':
                const callbackItem = this.callbacks[e.data.id];
                if (callbackItem && callbackItem.fn)
                    callbackItem.fn.apply(callbackItem.context);

                break;
            case 'interval:cleared':
            case 'timeout:cleared':
                delete this.callbacks[e.data.id];
                break;
        }
    },

    // 往worker里面发送销毁指令
    clearInterval: (id) => worker.postMessage({ command: 'interval:clear', id: id }),
    clearTimeout: (id) => worker.postMessage({ command: 'timeout:clear', id: id }),
};

worker.onmessage = workerTimer.onMessage.bind(workerTimer);
export default workerTimer;