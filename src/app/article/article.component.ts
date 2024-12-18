import { Component, Input, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass='row';
  @Input() article:Article | undefined ;

  constructor() { 
  }


  ngOnInit(): void {
  }
  voteUp(){
    if(this.article){
    this.article.votes+=1;
    }
    return false;
  }
  voteDown(){
    if(this.article){
    this.article.votes-=1;
    }
    return false;
  }

}
