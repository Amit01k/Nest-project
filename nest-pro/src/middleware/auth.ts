import { Controller, Injectable,NestMiddleware } from '@nestjs/common';
import {Request,Response,NextFunction} from "express"
import { nextTick } from 'process';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req:Request,res:Response,next:NextFunction){
        console.log("Requestin is coming",req.url)
        next()
    }
}
