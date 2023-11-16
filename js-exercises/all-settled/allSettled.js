const allSettled = (promises) => {
    return new Promise(resolve => {
        const res = []
        let cc = 0;

        check = () => {
            if (cc === promises.length) {
                resolve(res);
            }
        }
        if (!promises || promises.length === 0) {
            resolve(res);
        }
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                res[index] = {status: "fulfilled", value};
            }).catch(reason => {
                res[index] = {status: "rejected", reason};
            }).finally(() => {
                cc++;
                check();
            })
        })


    })
};

export { allSettled };
