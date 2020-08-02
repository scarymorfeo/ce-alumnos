import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Paises } from "../model/formaPago/paises/paises";
import { RegimenFiscal } from "../model/regimenFiscal/regimenFiscal";
import { CodigoPostal } from "../model/codigoPostal/codigoPostal";

@Injectable()
export class afiliacionControllerService {

    urlServidor = 'http://localhost:8089/facturacion/';

    constructor( 
        protected httpClient: HttpClient ) {
    }

    public ListarPais(body: any){
        return this.httpClient.get<Paises[]>(this.urlServidor+'paises', body);
    }

    public ListarRegimenFiscal(body: any){
        return this.httpClient.get<RegimenFiscal[]>(this.urlServidor+'regimen-fiscales', body);
    }

    public ListarCodigoPostal(body: any){
        return this.httpClient.get<CodigoPostal[]>(this.urlServidor+'codigo-postales', body);
    }
}