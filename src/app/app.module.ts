import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormaApiService } from './app.service';
import { FArticleComponent } from './model/f-article/f-article.component';

@NgModule({
  declarations: [
    AppComponent,
    FArticleComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [FormaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
