require('../index.js')

describe('test index.js', () => {
  test('test Promise.step', async () => {
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

    const result = await Promise.step([ajax1, ajax2, ajax3]).then(data => {
      console.log('done')
      return data
    })

    expect(JSON.stringify(result)).toBe('[1,2,3]')
  })

  test('Promise.step unexpect input', () => {
    try {
      Promise.step(123)
    } catch (e) {
      expect(e).not.toBeNull()
    }
  })
})
