import express from 'express'
import tastyRouter from './tasty-trade/tasty-trade-router.js'
const app = express()
const port = 3333

app.use(express.json())

app.use('/tasty-trade', tastyRouter)

app.listen(port, () => {
	console.log(`Tasty Trade Test Sandbox app listening at 🚀 http://localhost:${port} 🚀`)
})
