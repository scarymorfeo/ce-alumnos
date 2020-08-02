import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Paises } from "../model/formaPago/paises/paises";
import { RegimenFiscal } from "../model/regimenFiscal/regimenFiscal";
import { CodigoPostal } from "../model/codigoPostal/codigoPostal";



@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  urlServidor = 'http://localhost:8084/';

  constructor( 
      protected httpClient: HttpClient ) {
  }

  public InfoAlumno(body: any,matricula: String){
      return this.httpClient.get<any[]>(this.urlServidor+'estudiantes/' + matricula, body);
  }

  
  public Registrar(body: any){
      
    return this.httpClient.post<any[]>(this.urlServidor+'registro' , body);
}

}
