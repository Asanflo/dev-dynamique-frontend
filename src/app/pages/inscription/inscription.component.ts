import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'inscription.component.html',
  styleUrl: 'inscription.component.css'
})
export class InscriptionComponent {

  showPassword = false;

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullname: ['', Validators.required],
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      terms:    [false, Validators.requiredTrue]
    });

    // Recalcule la force à chaque changement
    this.registerForm.get('password')?.valueChanges.subscribe(() => {
      // passwordStrength est recalculé via le getter
    });
  }

  get passwordStrength(): number {
    const pwd: string = this.registerForm.get('password')?.value ?? '';
    if (!pwd) return 0;
    let score = 0;
    if (pwd.length >= 8)            score++;
    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd) || /[^a-zA-Z0-9]/.test(pwd)) score++;
    return score;
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      console.log('Inscription :', this.registerForm.value);
      // TODO : appeler AuthService.register(...)
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
