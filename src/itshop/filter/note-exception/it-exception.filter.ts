import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
import { itException } from '../../exception/note.exception/it.exception'

@Catch(itException)
export class itExceptionFilter implements ExceptionFilter {
  catch(exception: itException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()

    response.status(500).json({
      timestamp: new Date().toISOString(),
      msg: exception.what(),
    })
  }
}
