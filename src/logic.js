import { hello } from './hello'

export const logic = ($message) => {
    return new Promise((resolve, reject) => {
        const response = hello[Math.floor(Math.random() * hello.length)];
        const newMessage = Object.assign($message.message, { content: response })
        const newIntentMessage = Object.assign($message, { message: newMessage })
        resolve(newIntentMessage)
    })
}