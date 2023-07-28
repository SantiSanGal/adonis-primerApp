import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { hasOne } from "@adonisjs/lucid/build/src/Orm/Decorators";
import Persona from "App/Models/Persona";
import { HasOne } from "@adonisjs/lucid/build/src/Orm/Relations/HasOne";
import Departamento from "App/Models/Departamento";
import Sede from "App/Models/Sede";

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public clave: string

  @column()
  public tipo: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne( () => Persona, {
    localKey: 'id',
    foreignKey:'id_persona'
  })
  public persona: HasOne<typeof Persona>

  @hasOne( () => Sede, {
    localKey: 'id',
    foreignKey:'id_sede'
  })
  public sede: HasOne<typeof Sede>

  @hasOne( () => Departamento, {
    localKey: 'id',
    foreignKey:'id_departamento'
  })
  public departamento: HasOne<typeof Departamento>
}
