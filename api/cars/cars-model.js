const db = require('../../data/db-config')

const getAll = () => {
  return db('cars');
  // DO YOUR MAGIC
}

const getById = (id) => {
  return db('cars').where({id:id}).first();
  // DO YOUR MAGIC
}

const create = (car) => {
  return db('cars').insert(car)
  .then(result => {
    return getById(result[0])
  })
  // DO YOUR MAGIC
}

const valueCheck = (vin)=> {
  return db('cars').where(vin) //vin is an object that contains column and value
}


module.exports = {
  getAll,
  getById,
  create,
  valueCheck
}