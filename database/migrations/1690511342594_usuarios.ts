import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('id_persona')
        .notNullable()
        .unique()
        .unsigned()
        .references('id')
        .inTable('personas')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
      table
        .integer('id_departamento')
        .notNullable()
        .unique()
        .unsigned()
        .references('id')
        .inTable('departamentos')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
      table
        .integer('id_sede')
        .notNullable()
        .unique()
        .unsigned()
        .references('id')
        .inTable('sedes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
      table.string('nombre', 20).notNullable().unique()
      table.string('clave').notNullable()



      table.string('tipo', 20).notNullable()


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
