import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { UserService } from '../../services/user.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Book } from '../../model/book.model';
import { User } from '../../model/user.model';
import { trigger, transition, state, style, animate } from '@angular/animations';
import { ClickEvent } from 'angular-star-rating';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('initial', style({opacity: 1})),
      state('final', style({opacity: 0})),
      transition('final=>initial', [style({opacity: 0}), animate(500)]),
      transition('initial=>final', animate(200, style({opacity: 0})))
    ])
  ]
})
export class EvaluationComponent implements OnInit {

  books : Array<Book>;
  user : User;
  index: number = 0;
  currentState='';

  image : string;

  constructor(private _sanitizer: DomSanitizer, private router: Router, private userService: UserService) {
    this.books = SharedService.getInstance().getBooks();
    this.user = SharedService.getInstance().getUser();
  }

  ngOnInit() {
    this.changeState(0);
  }

  next(){
    if (this.hasNext() ){
      this.changeState(this.index + 1);
    }
  }
  previous(){
    if (this.hasPrevious() ){
      this.changeState(this.index - 1);
    }
  }

  hasNext(){
    return this.index + 1 < this.books.length ;
  }

  hasPrevious(){
    return this.index - 1 >= 0 ;
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  finish(){
    this.user.ratings = [];
    
    this.books.forEach(book => {
      this.user.ratings.push({bookId: book.id, evaluation: (
        book.iDontRead ? -1 : (
          book.evaluation > 0 ? book.evaluation : 0
          )
        )}
      );
    });
    
    this.userService.register(this.user).subscribe((responseApi: any) => {
      this.user = new User('','',[]);
      let userRet: User = responseApi;
      console.log({
        type: "success",
        text: `Registered ${userRet.email} with success`
      });
      this.router.navigate(['/finish']);
    }, erro => {
      console.log({
        type: 'danger',
        text: erro
      });
      this.router.navigate(['/finish']);
    });
    
  }

  changeState(index) {
    this.currentState = 'final';
    setTimeout(()=>{ this.currentState = 'initial', this.index = index; }, 500)
  }

  onClick = ($event: ClickEvent) => {
    this.books[this.index].evaluation = $event.rating;
  };
}
