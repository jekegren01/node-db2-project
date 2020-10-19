
exports.up = async function(knex) {
  await knex.schema.createTable('cars', (table) => {
      table.increments('id')
      table.text('make').notNull()
      table.text('model').notNull()
      table.text('vin').notNull().unique()
      table.integer('mileage').notNull()
      table.boolean('automatic_transmission').defaultTo(true)
      table.text('title')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cars')
};
