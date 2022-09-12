import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { UrlService } from '../../servidor/url.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})


export class PerfilPage implements OnInit {

  constructor(public nav: NavController, public servidorUrl: UrlService) {

    console.log(this.servidorUrl.getNomeCliente());
    console.log(this.servidorUrl.getIdCliente());
    console.log(this.servidorUrl.getFotoCliente());

    this.verificarLogin();

  }

  ngOnInit() {
    this.mudarPagina();
  }

  verificarLogin() {

    if(localStorage.getItem('userLogado') == 'sim'){

      var pegaPagina = document.querySelector("#loginPerfilDinamico");

      this.servidorUrl.setIdCliente(localStorage.getItem('idCliente'));
      this.servidorUrl.setNomeCliente(localStorage.getItem('nomeCliente'));
      this.servidorUrl.setEmailCliente(localStorage.getItem('emailCliente'));
      this.servidorUrl.setStatusCliente(localStorage.getItem('statusCliente'));
      this.servidorUrl.setDataCadCliente(localStorage.getItem('dataCadCliente'));
      this.servidorUrl.setFotoCliente(localStorage.getItem('fotoCliente'));

    }else{

      this.nav.navigateBack('/tabs/pg/cadastro');
      pegaPagina.setAttribute('tab', 'cadastro');

    }

  }

  sair() {

    localStorage.clear();
    localStorage.setItem('userLogado', 'nao');
    location.reload();

  }

  mudarPagina(){
    var pegaPagina = document.querySelector("#loginPerfilDinamico");
    if (localStorage.getItem('userLogado') != 'sim') {
      pegaPagina.setAttribute('tab', 'login');
      console.log("Ir pra login");
    } else{
      pegaPagina.setAttribute('tab', 'perfil');
      console.log("Continuar na página perfil")
    }

  }
}