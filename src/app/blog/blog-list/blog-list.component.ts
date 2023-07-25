import { Component } from '@angular/core';
import { Constant } from './Const';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  blogList = []
  // [{ id: 1, title: "Health", Summary: Constant.blogSummary, blogContent: Constant.blogContent },
  // { id: 2, title: "Health", Summary: Constant.blogSummary, blogContent: Constant.blogContent },
  // { id: 3, title: "Health", Summary: Constant.blogSummary, blogContent: Constant.blogContent },
  // { id: 4, title: "Health", Summary: Constant.blogSummary, blogContent: Constant.blogContent },
  // { id: 5, title: "Health", Summary: Constant.blogSummary, blogContent: Constant.blogContent },];

  
}
