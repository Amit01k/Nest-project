import { Controller, Get, Post, Body } from '@nestjs/common';

import { BlogsService } from '../blogs/blogs.service';

@Controller('users')
export class UsersController {
  constructor(private blogService: BlogsService) {}
  @Get()
  getHello(): string {
    return 'hiiii amit how are you';
  }
  @Get('history')
  userHistory(): object {
    return {
      id: 1,
      name: 'amit',
      lastName: 'kumar',
    };
  }
  @Get('string')
  userArray(): any {
    return {
      id: 6,
      name: '',
    };
  }
  @Post('add-user')
  postFun(): string {
    return 'hii how are you brothers';
  }

  @Get('blog-list')
  async blogList(): Promise<any[]> {
    return this.blogService.findData();
  }

  @Post('blog-add')
  blogadd(@Body() data: any) {
    // return 'this is come from blog list ';
    return this.blogService.create(data);
  }
}
