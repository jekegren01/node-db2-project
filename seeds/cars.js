
exports.seed = async function(knex) {
  // Deletes ALL existing entries
    await knex('cars').truncate()

    await knex('cars').insert([
        {vin: "123DD54JS", make: "Toyota", model: "Camry", mileage: 12000.30, automatic_transmission: true, title: "clean"},
        {vin: 'ASA90ASDJADA0', make: "Honda", model: "Civic", mileage: 4000, automatic_transmission: false},
        {vin: "A4KD90SDS2", make: "Dodge", model: "Charger", mileage: 0}
      ])
}