import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any;
  constructor(private postService:PostService){}
  ngOnInit(): void {
    this.getPost();
  }
 getPost(){
  this.postService.listePost().subscribe((response:any)=>{
    console.log(response);
    this.posts=response.Posts;
    console.log(this.posts)
  })
 }
}
