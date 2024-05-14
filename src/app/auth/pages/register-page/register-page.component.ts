import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  private fb = inject( FormBuilder );
  private authService = inject( AuthService );
  private router = inject( Router );

  public myForm: FormGroup = this. fb.group({
    name: ['', [ Validators.required, Validators.pattern('[a-zA-Z]*') ]],
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  });

  register() {
    const { name, email, password } = this.myForm.value;

    this.authService.register( name, email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/auth/login'),
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }
      });
  }


}
