import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './blog/header/header.component';
import { MainComponent } from './blog/main/main.component';
import { FooterComponent } from './blog/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Nl2brPipe } from './pipe/nl2br.pipe';
import { ArticleComponent } from './blog/main/article/article.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    Nl2brPipe,
    ArticleComponent,
    LoginComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
