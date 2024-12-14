//Post.mjs
//Create Post.mjs, exporting a default Post class that includes a constructor for title and content, and a publish method that logs the title and content to the console.

export default class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

publish() {
  console.log(`title: ${this.title}`);
  console.log(`content: ${this.content}`);
  }
}