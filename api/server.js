const express = require("express")
const carsRouter = require('./cars/cars-router')

const server = express()




server.use(express.json());
server.use('/api/cars', carsRouter)

server.get('/', (req, res) => {
    res.json({message: "Let's do this!"})
})

// DO YOUR MAGIC

module.exports = server
