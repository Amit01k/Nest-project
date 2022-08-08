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

@Controller('roles')
export class RolesController {
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
    //in the middle of history and card we can put anything and its acceptable
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
  //@HttpCode(404)
  item(@Param() record: any) {
    return 'userData' + record.id; //by this way we take input from user in params
  }

  @Get('query')
  qList(@Query() record: any): String {
    console.log(record);
    // return "this is id of this"+record.id
    return record;
  }
}
