const promises = (promises) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return;
        }

        const results = [];
        let completedCount = 0;

        function checkCompletion() {
            if (completedCount === promises.length) {
                resolve(results);
            }
        }

        if (promises.length === 0) {
            resolve(results);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    completedCount++;
                    checkCompletion();
                })
                .catch(reason => {
                    reject(reason);
                    return;
                });
        });
    });
};

export { promises };
