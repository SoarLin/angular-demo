import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get password(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      remember: [false]
    });
  }

  validClass(valid: boolean): string {
    return (valid) ? 'is-valid' : 'is-invalid';
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
  }

}
