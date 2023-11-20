import express from 'express';  // ESModule 시스템 사용 시, package.json에서 "type": "module", 추가
import { SERVER_PORT } from './constants/app.constant.js';  // ./constants/app.constant.js에 있는 SERVER_PORT 접근
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(SERVER_PORT, () => {
  console.log(`Example app listening on port ${SERVER_PORT}`)
})