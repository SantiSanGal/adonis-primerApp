import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { hasOne } from "@adonisjs/lucid/build/src/Orm/Decorators";
import Sede from 'App/Models/Sede'
import { HasOne } from "@adonisjs/lucid/build/src/Orm/Relations/HasOne";

export default class Departamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne( () => Sede, {
    localKey: 'id',
    foreignKey: 'id_sede',
  })
  public sede: HasOne<typeof Sede>
}
