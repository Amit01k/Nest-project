import {
  All,
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
// import { BlogsService } from '../../blogs/blogs.service';
@Controller('roles')
export class RolesController {
  //   constructor(private blogService: BlogsService) {}

  @Get()
  hello() {
    return 'this is come from employre module';
  }
  @Get('history')
  amit() {
    return 'this is come from you employee/roles';
  }
  @Get('history*card') //localhost:3000/roles/historysbdjgbjdsfgjcard
  cardamit() {
    // in the middle of history and card we can put anything and its acceptable
    return 'this is come from you employee/roles historycard';
  }
  @Post('post')
  postItem(): string {
    return 'hiiiii';
  }
  @All('allpost') //all accept get and post method so we can call by this method
  allItem(@Body() record: any): string {
    console.log(record);
    return 'hiiiii';
  }
  @Get('list/:id')
  @HttpCode(404)
  item(@Param() record: any) {
    return 'userData' + record.id; //by this way we take input from user in params
  }
  //   @Get('history*card') //localhost:3000/roles/historysbdjgbjdsfgjcard
  //   cardamit() {
  //     // in the middle of history and card we can put anything and its acceptable
  //     return 'this is come from you employee/roles historycard';
  //   }

  @Get('query')
  qList(@Query() record: any): String {
    console.log(record);
    // return "this is id of this"+record.id
    return record;
  }
  //   //   @Get('blog-list')
  //   //   async blogList(): Promise<any[]> {
  //   //     return this.blogService.findData();
  //   //   }

  //   @Post('blog-add')
  //   blogadd(@Body() data: any) {
  //     // return 'this is come from blog list ';
  //     this.blogService.create(data);
  //   }
}
