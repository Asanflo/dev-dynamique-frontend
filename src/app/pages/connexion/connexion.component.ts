import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'connexion.component.html',
  styleUrl: 'connexion.component.css'
})
export class ConnexionComponent {

  showPassword = false;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      console.log('Connexion :', this.loginForm.value);
      // TODO : appeler AuthService.login(...)
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
