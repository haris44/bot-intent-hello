import test from 'ava'
import { logic } from '../src/logic'
import { hello } from '../src/hello'

test(t => {
    return logic({ message: { content: 'hello' } }).then(element => {
        t.true(hello.includes(element.content))
    })
})