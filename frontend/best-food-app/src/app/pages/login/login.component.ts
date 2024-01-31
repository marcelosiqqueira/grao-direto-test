import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  )
  {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe( {
      next:(res: any) => {
        localStorage.setItem('token', res.acessToken);
        localStorage.setItem('name', res.name);
        localStorage.setItem('email', res.email);
        this.toastr.success('Login realizado com sucesso!', 'Senha Correta!');
        this.router.navigate(['home']);
      },
      error: (error) => {
        this.toastr.error('Email e/ou senha incorretos.', 'Acesso negado!');
      }
    }
    )
  }
}
