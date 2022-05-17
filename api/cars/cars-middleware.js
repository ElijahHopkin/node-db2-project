const {getById, valueCheck} = require ('./cars-model')
const vinValidator = require('vin-validator')

//checkCarPayload returns a status 400 with a { message: "<field name> is missing" } if any required field is missing.

const checkCarId = (req, res, next) => {
  const {id} = req.params
  getById(id)
    .then( result => {
      if(result==null) {
        res.status(404).json({message: `car with id ${id} is not found`})
        return
      }else{
        req.car=result
        next();
      }
    })

  // DO YOUR MAGIC
}

const checkCarPayload = (req, res, next) => {
  if (!req.body.vin) {
    res.status(400).json({message: 'vin is missing'})
    return
  }
  if (!req.body.make) {
    res.status(400).json({message: 'make is missing'})
    return
  }
  if (!req.body.model) {
    res.status(400).json({message: 'model is missing'})
    return
  }
  if (!req.body.mileage || typeof parseInt(req.body.mileage) !='number') {
    res.status(400).json({message: 'mileage is missing'})
    return
  }else{
    next();
  }
 
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  if(!vinValidator.validate(req.body.vin)) {
    res.status(400).json({message: `vin ${req.body.vin} is invalid`})
    return
  }else{
    next();
  }
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  valueCheck({'vin': req.body.vin})
    .then(result => {
      if(result.length>0) {
        res.status(400).json({message: `vin ${req.body.vin} already exists`})
      }else{
        next()
      }

    })
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
