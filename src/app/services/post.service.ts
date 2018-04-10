import { Post } from '../models/post.model';
import { Subject } from 'rxjs/Subject';

export class PostService {

  postsSubject = new Subject<any[]>();

  private posts = [
      {
      index: 0,
      title: 'Premier post',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis`,
      created_at: new Date,
      loveIts: 0
      },
      {
      index: 1,
      title: 'Second post',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis`,
      created_at: new Date,
      loveIts: 0
      },
      {
      index: 2,
      title: 'Troisième post',
      content: `Personne n\'aime la douleur en elle-même,
                ne la recherche et ne la souhaite,
                tout simplement parce qu\'il s\'agit de la douleur ...`,
      created_at: new Date,
      loveIts: 0
      }
  ];

  emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addNewPost(post: Post) {
    this.posts.push(post);
    this.emitPostsSubject();
  }

  suppressPost(index: number) {
    this.posts.splice(index, 1);
    this.emitPostsSubject();
  }

  loveIt(index: number) {
    this.posts[index].loveIts++;
    console.log(this.posts[index].title);
    console.log(`loveNumber: ${ this.posts[index].loveIts }`);
    this.emitPostsSubject();
  }

  dontLoveIt(index: number) {
    this.posts[index].loveIts--;
    console.log(this.posts[index].title);
    console.log(`loveNumber: ${ this.posts[index].loveIts }`);
    this.emitPostsSubject();
  }

}
