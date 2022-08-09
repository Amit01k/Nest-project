import { Controller, Get, HttpCode, Post } from '@nestjs/common';

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
}
