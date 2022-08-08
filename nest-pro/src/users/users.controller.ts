import { Controller,Get, Post } from '@nestjs/common';


@Controller('users')
export class UsersController {
    @Get()
    getHello(): string {
      return "hiiii amit how are you"
    }
    @Get("history")
    userHistory():object{
        return {
            id:1,
            name:"amit",
            lastName:"kumar"
        }
    }
    @Get("string")
    userArray():any{
        return {
            id:6,
            name:""

        }
    }
    @Post("add-user")
        postFun():string{

            return "hii how are you brothers"
        }
    
}



