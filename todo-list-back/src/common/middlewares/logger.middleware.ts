import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const { path, headers } = req;
    console.log('Request: ', { path, host: headers.host, referer: headers.referer });
    next();
  }
}
