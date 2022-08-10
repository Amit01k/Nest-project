import {
  Controller,
  DefaultValuePipe,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { pipeline } from 'stream';

@Controller('posts')
export class PostsController {
  @Get()
  hello() {
    return 'hii amit ';
  }
  @Get('post')
  @HttpCode(200)
  postHello() {
    return 'this is coming from post controller form post method';
  }
  @Post('post-pipe/:id')
  @HttpCode(200)
  pipeMessage(@Param('id', new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) data: any) {
    //here we add parseIntpipe who accept only integer input and we put some error msg by this way
    return 'this is params id' + data;
  }
  @Post('post-pipe-page/:id') 
  @HttpCode(200)
  pipeMessagePage(@Query('page',new DefaultValuePipe(10))page:number):String {
    //here we add parseIntpipe who accept only integer input and we put some error msg by this way
    return 'this is params id' + page;
  }
}
