import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Paises } from "../model/formaPago/paises/paises";
import { RegimenFiscal } from "../model/regimenFiscal/regimenFiscal";
import { CodigoPostal } from "../model/codigoPostal/codigoPostal";



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  urlServidor = 'http://localhost:8089/facturacion/';

  constructor( 
      protected httpClient: HttpClient ) {
  }

  public ListarPais(body: any){
      return this.httpClient.get<Paises[]>(this.urlServidor+'paises', body);
  }

  public ListarRegimenFiscal(body: any){
      return this.httpClient.get(this.urlServidor+'regimen-fiscales', body);
  }

  public ListarCodigoPostal(body: any){
      return this.httpClient.get<CodigoPostal[]>(this.urlServidor+'codigo-postales', body);
  }

  public obtenDatosCP(pCp: string){
      return this.httpClient.get(this.urlServidor+'codigo-postales'+'/'+pCp);
  }


  public guardaCliente(body: any) {
      let headers: HttpHeaders = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.httpClient.post(this.urlServidor+'clientes', body, {'headers': headers});
  }

}
