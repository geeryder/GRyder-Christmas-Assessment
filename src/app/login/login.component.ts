import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(details: {email: string, password: string}) {
    this.authService.login(details.email, details.password)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((error: Error) => {
        this.errorMessage = error.message;
      });
  }

  ngOnInit() {
  }

}
