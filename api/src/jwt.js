import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './config/jwt'

const encode = payload => new Promise((resolve, reject) => {
  jwt.sign(payload, JWT_SECRET, function (err, token) {
    if (err) return reject(err)
    resolve(token)
  })
})

const decode = token => new Promise((resolve, reject) => {
  jwt.verify(token, JWT_SECRET, function (err, decoded) {
    if (err) return reject(err)
    return resolve(decoded)
  })
})

export { encode, decode }
