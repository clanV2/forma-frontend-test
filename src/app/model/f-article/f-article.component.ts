import { Component, OnInit } from '@angular/core';
import { features } from 'process';
import { FormaApiService } from 'src/app/app.service';
import { FeaturedArticle, NormalArticle } from '../article';

@Component({
  selector: 'app-f-article',
  templateUrl: './f-article.component.html',
  styleUrls: ['./f-article.component.css']
})
export class FArticleComponent implements OnInit {
  featuredArray: FeaturedArticle[] =[];
  normalArray: NormalArticle[] =[];
  constructor(public articleService : FormaApiService) { }

  ngOnInit(): void {
    var articles = this.articleService.getArticles();
    articles.subscribe((articleData : FeaturedArticle[])=>
    {
      this.featuredArray = articleData.filter((art) => art.type=="FEATURED")
    });
    articles = this.articleService.getArticles();
    articles.subscribe((articleData : NormalArticle[])=>
    {
      this.normalArray = articleData.filter((art) => art.type=="NORMAL")
    });
  }

}
