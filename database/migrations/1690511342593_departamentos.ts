import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'departamentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre', 20).notNullable().unique()

      table
        .integer('id_sede')
        .notNullable()
        .unique()
        .unsigned()
        .references('id')
        .inTable('sedes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
