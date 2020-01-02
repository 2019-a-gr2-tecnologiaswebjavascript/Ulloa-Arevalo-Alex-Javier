import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./autenticacion/login/login.component";
import {FormsModule} from "@angular/forms";
import {LoginService} from "./servicios/autenticacion/login.service";
import {UsuarioHttpService} from "./servicios/http/usuario-http-service";
import {HttpClientModule} from "@angular/common/http";
import {ConductorHttpService} from "./servicios/http/conductor-http-service";
import {AutoHttpService} from "./servicios/http/auto-http-service";
import {ConductorComponent} from "./administracion/conductor/conductor.component";
import {ConductorService} from "./servicios/administracion/conductor.service";
import {AutoComponent} from "./administracion/auto/auto.component";
import {CrearAutoComponent} from "./administracion/auto/crear-auto/crear-auto.component";
import {FacturaHttpService} from "./servicios/http/factura-http-service";
import {DetalleFacturaHttpService} from "./servicios/http/detalle-factura-http-service";

@NgModule({
    declarations: [AppComponent,
        LoginComponent,
        ConductorComponent,
        AutoComponent,
        CrearAutoComponent],
    entryComponents: [],
    imports: [BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
        LoginService,
        UsuarioHttpService,
        ConductorHttpService,
        ConductorService,
        AutoHttpService,
        FacturaHttpService,
        DetalleFacturaHttpService,
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
