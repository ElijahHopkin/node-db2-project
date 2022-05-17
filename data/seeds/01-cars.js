// STRETCH
exports.seed = async function(knex) {
    await knex('cars').truncate();
    await knex('cars').insert([
        {vin: 'ngli9353qgninl', make: 'Ford', model: 'Fusion', mileage: 67573, title: 'clean', transmission: 'automatic'},
        {vin: 'nongeln2532', make: 'Chevy', model: 'silverado', mileage: 357879, title: 'clean'}
    ]);
}