import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PastelesComponent } from './components/pasteles/pasteles.component';
import { CupcakesComponent } from './components/cupcakes/cupcakes.component';
import { CandybarComponent } from './components/candybar/candybar.component';
import { GalletasComponent } from './components/galletas/galletas.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    //{ path: 'producto', component: ProductoComponent },
    { path: 'pasteles', component: PastelesComponent, pathMatch: 'full' },
    { path: 'cupcakes', component: CupcakesComponent, pathMatch: 'full' },
    { path: 'candybar', component: CandybarComponent, pathMatch: 'full' },
    { path: 'galletas', component: GalletasComponent, pathMatch: 'full' },
    { path: 'cotizaciones', component: CotizacionComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class Rutas {}
