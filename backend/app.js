require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

// 미들웨어 설정
app.use(
  cors({
    origin: process.env.FRONT_URL,
    credentials: true,
  })
)
app.use(express.json())

const run = require('./db')
run()

app.get('/', (req, res) => {
  res.json({ success: true })
})

// 추가된 라우트 로딩
app.use(require('./routes'))

// 404 처리 미들웨어
app.use((req, res) => {
  res.status(404).json({ message: '잘못된 경로로 요청되었음' })
})

// 서버 실행
const port = process.env.EXPRESS_PORT || 3000 // 포트 설정
app.listen(port, () => {
  console.log(`✅ 서버 실행 중 PORT: ${port}`)
})
