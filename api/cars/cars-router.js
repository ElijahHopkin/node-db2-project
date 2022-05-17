// DO YOUR MAGIC
const express = require('express')
const Cars = require ('./cars-model')
const {checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid} = require('./cars-middleware')
const router = express.Router()

router.get('/', (req, res) => {
    Cars.getAll()
        .then(result => {
            res.json(result)
        })
})

router.get('/:id', checkCarId, (req, res) => {
    res.json(req.car)
})

router.post('/',  checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res) => {
    Cars.create(req.body)
        .then( result => {
            res.status(201).json(result)
        })
})





module.exports= router