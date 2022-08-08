import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()  //here we can put the path of this

export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
