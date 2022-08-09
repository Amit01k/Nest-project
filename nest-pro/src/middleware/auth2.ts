import { Controller, Injectable,NestMiddleware } from '@nestjs/common';
import {Request,Response,NextFunction} from "express"
import { nextTick } from 'process';
@Injectable()
export class AuthMiddleware2 implements NestMiddleware {
    use(req:Request,res:Response,next:NextFunction){
        console.log("Requestin is coming by second middleware",req.url)
        next()
    }
}
