import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FacturarComponent } from './facturar/facturar.component';
import { ProductosComponent } from './productos/productos.component';
import { AgregarProductosComponent } from './agregar_productos/agregar_productos.component';
import { FacturasPendientesComponent } from './facturas_pendientes/facturas_pendientes.component';

import { RegistroClienteComponent } from './registro_cliente/registro_cliente.component';
import { EdicionClienteComponent } from './edicion_cliente/edicion_cliente.component';



const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
