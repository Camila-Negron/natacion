import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { InicioComponent } from './inicio/inicio.component';
import { PiscinaComponent } from './piscina/piscina.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { BrazadaComponent } from './brazada/brazada.component';
import { TiempoComponent } from './tiempo/tiempo.component';
import { DiasComponent } from './dias/dias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    PiscinaComponent,
    ObjetivoComponent,
    BrazadaComponent,
    TiempoComponent,
    DiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-7stwulo1gocw15ze.us.auth0.com',
      clientId: 'mkHs83D4zR5nGyY5ofbe5TeFLq7Ktth8',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
