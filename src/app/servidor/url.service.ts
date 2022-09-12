import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular'; 

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  url:string = "http://localhost/persomonise/admin/";

  idCliente: any;
  nome: any;
  email: any;
  status: any;
  data: any;
  foto: any;

  constructor(public alerta: AlertController) { } 

  pegarUrl(){
    return this.url;
  }

  async Alerta(titulo, msg){
    const alert = await this.alerta.create({
      cssClass: 'app-alerta', // CLASSE CSS CUSTOMIZAVEL 
      header: titulo, // TITULO
      message: msg, // MENSAGEM
      buttons: ['Ok'] 
    });

    await alert.present();
  }

  setIdCliente(valor) {
    this.idCliente = valor;
  }
  getIdCliente() {
    return this.idCliente;
  }

  setNomeCliente(valor) {
    this.nome = valor;
  }
  getNomeCliente() {
    return this.nome;
  }

  setEmailCliente(valor){
    this.email = valor;
  }
  getEmailCliente(){
    return this.email;
  }

  setStatusCliente(valor){
    this.status = valor;
  }
  getStatusCliente() {
    return this.status;
  }

  setFotoCliente(valor){
    this.foto = valor;
  }
  getFotoCliente(){
    return this.foto;
  }

  setDataCadCliente(valor){
    this.data = valor;
  }
  getDataCadCliente(){
    return this.data;
  }

}
