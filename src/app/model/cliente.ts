import { Usuario } from './usuario';

export class Cliente {
	certificadoSello: string = '';
	clienteId: number = 0;
	colonia: string = '';
	cp: string = '';
	domicilio: string = '';
	email: string = '';
	estado: string = '';
	fiel: string = '';
	lugarExpedicion: string = '';
	municipio: string = '';
	paisId: number = 0;
	razonSocial: string = '';
	regimenFiscalId: number = 0;
	rfc: string = '';
	telefono: string = '';
	usuario: Usuario = new Usuario();

    constructor(
	) {
    }
}
