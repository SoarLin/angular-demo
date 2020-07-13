import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFrom = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    remember: new FormControl('')
  });

  get email(): FormControl {
    return this.loginFrom.get('email') as FormControl;
  }
  get password(): FormControl{
    return this.loginFrom.get('password') as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }

  validClass(valid: boolean): string {
    return (valid) ? 'is-valid' : 'is-invalid';
  }

  onSubmit(): void {
    console.log(this.loginFrom.value);
  }

}
