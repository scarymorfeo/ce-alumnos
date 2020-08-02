import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormaPago } from "src/app/model/formaPago/formaPago";
import { MetodoPago } from "src/app/model/metodoPago/metodoPago";
import { Moneda } from "src/app/model/moneda/moneda";

@Injectable()
export class facturaControllerService {
   urlServidor = 'http://localhost:8089/facturacion/';

    constructor( 
        protected httpClient: HttpClient) {     
    }

     public ListaFormaPago(body: any) {
        return this.httpClient.get<FormaPago[]>(this.urlServidor+`forma-pagos`, body);
 
     }

     public ListaMetodoPago(body: any) {
        return this.httpClient.get<MetodoPago[]>(this.urlServidor+`metodo-pagos`, body);
 
     }

     public ListaMoneda(body: any) {
        return this.httpClient.get<Moneda[]>(this.urlServidor+`monedas`, body);
 
     }
}