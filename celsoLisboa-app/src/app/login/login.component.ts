import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  fazerLogin(){
    console.log(this.usuario)
    this.authService.fazerLogin(this.usuario);
  }
}
