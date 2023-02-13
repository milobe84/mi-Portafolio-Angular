import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

const USERNAME = 'admin';
const PASSWORD = '123456';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userInfo = {
    username: 'admin',
    name: 'Miryan',
  };

  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    if (this.username === USERNAME && this.password === PASSWORD) {
      this.authService.login(this.userInfo);
      this.router.navigate(['/profile']);
    } else {
      this.loginError = true;
    }
  }
}
