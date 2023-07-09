import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @ViewChild("signUpForm") signUpForm: NgForm

  constructor(private userService: UserService, private _snackBar: MatSnackBar) {}

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }



  onSignupFormSubmit() {
    console.log(this.signUpForm.form.value)

    if (!this.signUpForm.valid) {
      this._snackBar.open('Invalid form', '', {
        duration: 2000
      })
      return;
    }

    this.userService.addUser(this.signUpForm.form.value).subscribe((data) => {
      console.log(data)
      this._snackBar.open("User Created!", '', {
        duration: 2000,
      })
    }, (error) => {
      console.log(error)
      this._snackBar.open('Something went wrong!', '', {
        duration: 2000
      })
    })
  }

  onClear() {
    this.signUpForm.reset()
  }
}

