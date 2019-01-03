import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  register(details: {email: string, password: string}) {
    this.authService.register(details.email, details.password)
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
