import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth/auth.service';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {

  constructor( private readonly _authService: AuthService ) { }
  
  ngOnInit() {
  }

  login() {
    console.log('Me estoy logeando');
    this._authService.login('1234', 'alex');

  }
  logout() {
    console.log('estoy saliendo');
    this._authService.logout();
  }

}
