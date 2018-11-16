+ function (Promise) {
    /**
     * Resolve promises in order
     * @param {Array(function)} Promise Creator
     * @return {Promise}  All promise resolved
     */
    Promise.step = PromiseArr => {
        if (PromiseArr instanceof Array && PromiseArr[0] instanceof Function) {
            const len = PromiseArr.length
            let result = []

            function recursive(i) {
                if (i === len) {
                    return result
                } else {
                    return PromiseArr[i]().then(data => {
                        result.push(data)
                        return recursive(i + 1)
                    })
                }
            }
            return recursive(0)
        } else {
            throw new Error('Please input a promise creator array!')
        }
    }
}(Promise)