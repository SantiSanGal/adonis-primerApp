import { httpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Usuario from "App/Models/Usuario";
import { res } from "pino-std-serializers";

const list = async ({request, response, view}:httpContextContract){
  try {

    const usuario = await Usuario.all()


    return usuario
  }catch (e){

  }
}

export { list }
