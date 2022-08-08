import { All, Controller,Get, Post } from '@nestjs/common';

@Controller('roles')
export class RolesController {
    @Get()
    hello(){
        return "this is come from employre module"
    }
    @Get("history")
    amit(){
        return "this is come from you employee/roles"
    }
    @Post("post")
        postItem():string{
            return "hiiiii"
            
        }
        @All("allpost")  //all accept get and post method so we can call by this method
        allItem():string{
            return "hiiiii"
            
        }


}
