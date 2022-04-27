import { Controller, Get, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get()
  @Redirect('/docs', 302)
  redirectToDocs() {
    return;
  }

  @Get('/hello')
  getHello(): string {
    return 'Hello !';
  }
}
