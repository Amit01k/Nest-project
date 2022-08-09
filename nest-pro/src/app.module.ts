import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { EmployeeModule } from './employee/employee.module';
import { BlogsService } from './blogs/blogs.service';
import { PostsController } from './posts/posts.controller';
import { AuthMiddleware } from './middleware/auth';
import { AuthMiddleware2 } from './middleware/auth2';

@Module({
  imports: [EmployeeModule],
  controllers: [AppController, UsersController, PostsController],
  providers: [AppService, BlogsService],
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware,AuthMiddleware2)   //by this way we call two middleware on same time
      // .exclude({
      //   path: 'posts/post',    //by this way we give credential where our middleware not work
      //   method: RequestMethod.GET,
      // })
      //.forRoutes('posts');
      //.forRoutes(PostsController); //here we are setting the where we want to call out middleware
      //  .forRoutes({
      //   path:"/users/history",method:RequestMethod.GET         //this is way to give specific path to run middleware
      // })
      //.forRoutes(UsersController);
  }
}
