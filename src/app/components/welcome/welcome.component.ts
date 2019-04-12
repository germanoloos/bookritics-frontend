import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { BookService } from '../../services/book.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message: {};
  user = new User('','',[]);
  listBooks = [];
  shared : SharedService;

  constructor(private bookService: BookService, private router: Router) {
    this.shared = SharedService.getInstance();
  }

  login(){
    this.bookService.findAll().subscribe((responseApi: []) => {
      if (responseApi){
        this.shared.setBooks(responseApi);
        this.shared.setUser(this.user);
        this.router.navigate(['/evaluation']);
      }
    }, err => {
      this.showMessage({
        type: 'error',
        text: err.message
      });
    });
  }

  ngOnInit() {
  }

  getFormGroupClass(isInvalid: boolean, isDirty:boolean): {} {
    return {
      'form-group': true,
      'has-error' : isInvalid  && isDirty,
      'has-success' : !isInvalid  && isDirty
    };
  }

  private showMessage(message: {type: string, text: string}) : void {
    this.message = message.text;
    console.log(this.message);
    /* setTimeout( () => {
      this.message = undefined;
    }, 3000); */
  }

}
