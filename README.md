# Promise-extenstion-api

Make Promise stronger.

We add some common methods in Promise class.

## Install

`$npm install --save-dev promise-extension-api`

## Usage

```js
require('promise-extension-api')

Promise.step([...PromiseCreators])
```

### Promise.step

Resolve promises in order.

```js
const timeout = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

const ajax1 = () => {
    return timeout(200).then(() => {
        console.log(1)
        return 1
    })
}

const ajax2 = () => {
    return timeout(100).then(() => {
        console.log(2)
        return 2
    })
}

const ajax3 = () => {
    return timeout(200).then(() => {
        console.log(3)
        return 3
    })
}

//It will console
//1
//2
//3
//done
//[1,2,3]
Promise.step([ajax1, ajax2, ajax3]).then(data => {
    console.log("done")
    console.log(data)
    return data
})
```

## License

MIT

## Keywords

Promise