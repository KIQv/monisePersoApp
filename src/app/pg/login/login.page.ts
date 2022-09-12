import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../servidor/url.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string; /*Variavel do tipo texto*/
  senha:string; /*Variavel do tipo texto*/
  dadosLogin: any;

  constructor(public servidorUrl: UrlService, public http: HttpClient) {

    this.email = "kaiqueoliveira257@gmail.com";
    this.senha = "123";
    /* REMOVER NO FINAL DOS TESTES */

   }

  ngOnInit() {
  }

  async Logar() {
    if(this.email == "" || this.senha == ""){
      console.log("Preencha todos os campos.");
      this.servidorUrl.Alerta('Atenção', 'Preencha todos os campos.')
    }else{
      // http://localhost/kibelezati14/admin/login.php?email='kaiqueoliveira257@gmail.com'&senha='123'
      this.http.get(this.servidorUrl.pegarUrl() + 'login.php?email=' + this.email + '&senha=' + this.senha)
      .pipe(map(rep => rep)).subscribe(data => {
        this.dadosLogin = data;
        console.log(this.dadosLogin);

        if(this.dadosLogin[0].msg.Logado == 'Sim'){
          if(this.dadosLogin[0].Dados.statusCliente == 'ATIVO'){
            this.servidorUrl.Alerta('Monise Personalizados', this.dadosLogin[0].Dados.nomeCliente + ', seja bem vindo.');
          }else{
            this.servidorUrl.Alerta('Monise Personalizados', this.dadosLogin[0].Dados.nomeCliente + ', fale com o adm do sistema.');
          }
        }else{
          this.servidorUrl.Alerta('Opps!', 'Usuário ou Senha invalido');
        }
      })
    }
  }

}
