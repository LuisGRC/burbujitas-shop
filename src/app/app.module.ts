import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// RUTAS
import { Rutas } from './app.routes';

// COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { PastelesComponent } from './components/pasteles/pasteles.component';
import { CupcakesComponent } from './components/cupcakes/cupcakes.component';
import { CandybarComponent } from './components/candybar/candybar.component';
import { GalletasComponent } from './components/galletas/galletas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductoComponent,
    CotizacionComponent,
    PastelesComponent,
    CupcakesComponent,
    CandybarComponent,
    GalletasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
