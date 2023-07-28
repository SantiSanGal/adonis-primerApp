import { list } from './handlers/list'
export default class UsuariosController {
  public async list(request, view){
    const paramns: any = {
      request,
      view,
    }
    return list(paramns)
  }
}
