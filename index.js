const express = require('express')
const dealerRouter = require('./dealer/dealer-router')

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())

server.use("/car-dealer", dealerRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})