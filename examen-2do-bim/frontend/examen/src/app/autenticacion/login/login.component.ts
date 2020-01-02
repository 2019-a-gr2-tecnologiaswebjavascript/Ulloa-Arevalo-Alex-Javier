import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../servicios/autenticacion/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  password: string;
  correo: string;

  constructor( private readonly _loginService: LoginService) { }

  ngOnInit() {}

  ingresar() {
    console.log('password:', this.password, 'correo:', this.correo);

    this._loginService.verificarUsuario(this.correo, this.password);

  }

}
