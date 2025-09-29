export default function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number = 0,
    options: {
        leading?: boolean;
        trailing?: boolean;
        maxWait?: number;
    } = {}
): T & { cancel: () => void; flush: () => void } {
    let lastArgs: any[] | undefined;
    let lastThis: any;
    let maxWait: number | undefined = options.maxWait;
    let result: any;
    let timerId: ReturnType<typeof setTimeout> | undefined;
    let lastCallTime: number | undefined;
    let lastInvokeTime = 0;
    let leading = !!options.leading;
    let trailing = 'trailing' in options ? !!options.trailing : true;

    function invokeFunc(time: number) {
        const args = lastArgs;
        const thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args as any);
        return result;
    }

    function startTimer(pendingFunc: () => any, wait: number) {
        return setTimeout(pendingFunc, wait);
    }

    function cancelTimer(id: ReturnType<typeof setTimeout>) {
        clearTimeout(id);
    }

    function leadingEdge(time: number) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = startTimer(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time: number) {
        const timeSinceLastCall = time - (lastCallTime as number);
        const timeSinceLastInvoke = time - lastInvokeTime;
        const timeWaiting = wait - timeSinceLastCall;

        return maxWait !== undefined
            ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
            : timeWaiting;
    }

    function shouldInvoke(time: number) {
        const timeSinceLastCall = time - (lastCallTime as number);
        const timeSinceLastInvoke = time - lastInvokeTime;

        return (
            lastCallTime === undefined ||
            timeSinceLastCall >= wait ||
            timeSinceLastCall < 0 ||
            (maxWait !== undefined && timeSinceLastInvoke >= maxWait)
        );
    }

    function timerExpired() {
        const time = Date.now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = startTimer(timerExpired, remainingWait(time));
    }

    function trailingEdge(time: number) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }

    function cancel() {
        if (timerId !== undefined) {
            cancelTimer(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
        return timerId === undefined ? result : trailingEdge(Date.now());
    }

    function debounced(this: any, ...args: any[]) {
        const time = Date.now();
        const isInvoking = shouldInvoke(time);

        lastArgs = args;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxWait !== undefined) {
                timerId = startTimer(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = startTimer(timerExpired, wait);
        }
        return result;
    }

    debounced.cancel = cancel;
    debounced.flush = flush;

    return debounced as T & { cancel: () => void; flush: () => void };
}