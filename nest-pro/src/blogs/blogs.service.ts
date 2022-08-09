import { Injectable } from '@nestjs/common';
interface blog {
  name: String;
  id: number;
}
@Injectable()
export class BlogsService {
  // private readonly blogs: blog[] = []; //when we use interface than we need to use this
  private readonly blogs: any[] = [];

  create(data: any) {
    this.blogs.push(data);
  }

  findData(): any[] {
    return this.blogs;
  }
}
