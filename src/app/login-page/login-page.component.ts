import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private user : any = {
    username : '',
    password : ''
  }
  constructor(private Login: LoginService,private router: Router) { }

  ngOnInit() {
  }
  onLogin() {
    var self = this;
    self.Login.get(this.user).subscribe(function (response) {
      console.log(response);
      self.router.navigate(['/app']);
    }, function (error) {
      console.log(error);
    }, function () {

    });
  }
}
