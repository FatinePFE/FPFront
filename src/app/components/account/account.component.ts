import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../model/model.user';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(public accountService: AccountService, public router: Router) {
  }

  ngOnInit() {
  }

  update() {
    this.accountService.updateAccount(this.user).subscribe(data => {
        this.router.navigate(['/']);
      }, err => {
        console.log(err);
        this.errorMessage = "username already exist";
      }
    )
  }

}
