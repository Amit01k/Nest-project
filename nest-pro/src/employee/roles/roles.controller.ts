import { Controller,Get } from '@nestjs/common';
import { get } from 'http';

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


}
