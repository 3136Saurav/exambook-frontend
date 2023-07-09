import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild("loginForm") loginForm: NgForm;

  constructor(private loginService: LoginService, private router: Router, private _snackBar: MatSnackBar) {}

  public loginFormData = {
    username: '',
    password: ''
  }

  onLoginFormSubmit() {
    console.log(this.loginForm);

    if (!this.loginForm.valid) {
      this._snackBar.open('Invalid Credentials', '', {
        duration: 2000
      })
      return;
    }

    this.loginService.generateToken(this.loginFormData).subscribe((data: any) => {
      console.log('Successful Login')

      this.loginService.loginUser(data.token)

      this.loginService.getCurrentUser().subscribe((user) => {
        console.log(user)
        this.loginService.setUser(user)
        const role = this.loginService.getUserRole()

        if (role === 'ADMIN') {
          // if user is admin 
          this.router.navigate(['admin']);

        } else if (role === 'NON_ADMIN') {
          // else if user is normal
          this.router.navigate(['normal']);

        } else {
          this.loginService.logoutUser()
        }

      })

    }, (error) => {
      console.log('Error while login')
      this._snackBar.open('Invalid Credentials', '', {
        duration: 2000
      })
      console.log(error)
    })
  }
}
