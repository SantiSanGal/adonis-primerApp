import { httpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

const list = async ({view}:httpContextContract){
  try {
    console.log('Desde el handler list');
    return view.render('welcome')
  }catch (e){
    console.log('xd');
  }
}

export { list }
