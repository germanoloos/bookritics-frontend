import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/book.service';
import { SharedService } from './services/shared.service';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { StarRatingModule } from 'angular-star-rating';
import { UserService } from './services/user.service';
import { FinishComponent } from './components/finish/finish.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotFoundComponent,
    EvaluationComponent,
    FinishComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StarRatingModule.forRoot()
  ],
  providers: [
    BookService, SharedService, UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
