import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UnidadMedida } from "src/app/model/unidadMedida/unidadMedida";

@Injectable()
export class productosControllerService {
    urlServidor = 'http://localhost:8089/facturacion/';

    constructor( 
        protected httpClient: HttpClient) {     
    }

     public ListaUnidadMedida(body: any) {
        return this.httpClient.get<UnidadMedida[]>(this.urlServidor+`unidad-medidas`, body);
 
     }

}