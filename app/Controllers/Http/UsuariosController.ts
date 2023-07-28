import { list } from './handlers/list'
export default class UsuariosController {
  public async list(request, response,view){
    const paramns: any = {
      request,
      response,
      view,
    }
    return list(paramns)
  }
}
