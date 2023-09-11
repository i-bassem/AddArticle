import { Component, OnChanges, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ArticleService } from '../_services/Articles/articles.service';
import { IArticle } from '../_models/IArticle';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  article: IArticle | null = null;
  articles: IArticle[]= []
  validationErrors:any;
  articleAddForm:any;


  constructor(private articleService: ArticleService, public router: Router,private formBuilder:FormBuilder){

    this.articleAddForm = formBuilder.group(
      {
        id:["", Validators.required],
        title: ["", Validators.required],
        content: ["", Validators.required, Validators.minLength(20)],
        updatedAt:    ["", [Validators.required, Validators.email]],
        publishedBy:    ["", [Validators.required,]],

      }
    )
  }

  get id(){
    return this.articleAddForm.get('id')
  }

  get title(){
    return this.articleAddForm.get('title')
  }
  get content(){
    return this.articleAddForm.get('content')
  }
  get updatedAt(){
    return this.articleAddForm.get('updatedAt')
  }    
  get publishedBy(){
    return this.articleAddForm.get('publishedBy')
  }      
  
  ngOnInit(): void {

  }

 login(){

  this.articleService.login().subscribe(
    (token:any)=> 
    {
let tk = token!.token;
tk.replace(/["]/g, );
console.log(tk);
      localStorage.setItem('token',tk)
    }
    
  )
 }

getAllArticles(){
  console.log(localStorage.getItem("token"));
  this.articleService.getAllArticles().subscribe((articles) => (this.articles=articles)); 
}

addArticle(){

  let newArticle = this.articleAddForm.value as IArticle;

  this.articleService.addArticle(newArticle).subscribe();
}

}

