import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UrlService } from '../../servidor/url.service';
import { map } from 'rxjs/operators';
import { IonSegment } from '@ionic/angular';

@Component({

  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],

})

export class CadastroPage implements OnInit {

  type: string = 'log';

  dadosLogin: any;

  cadastro:any;
  nome:any;
  email:any;
  senha:any;

  constructor(public http:HttpClient,
    public servidorUrl: UrlService,
    public nav: NavController,
    public formConst: FormBuilder) { 

      /* this.email = "ju.sa@gmail.com";
      this.senha = "1234"; */

      this.cadastro = this.formConst.group({
        nome: ['', Validators.required],
        email: ['', Validators.required],
        senha: ['', Validators.required],
      });
    } // FIM CONSTRUCTOR

  ngOnInit() {}

  async Logar(){
    if(this.email == "" || this.senha == ""){
      console.log('Preencha todos os campos');
      this.servidorUrl.Alerta('Atenção', 'Preencha todos os campos.')
     
    }else{
     this.http.get(this.servidorUrl.pegarUrl() + 'login.php?email=' + this.email + '&senha=' + this.senha)
     .pipe(map(rep => rep))
     .subscribe(data =>{

      this.dadosLogin = data;
      console.log(this.dadosLogin);
      
      if(this.dadosLogin[0].msg.Logado == 'Sim'){
        if(this.dadosLogin[0].Dados.statusCliente == 'ATIVO'){
          this.servidorUrl.Alerta('Olá!', this.dadosLogin[0].Dados.nomeCliente + ', seja bem vindo.');

          // Pegar os dados do usuario local storage
          localStorage.setItem('idCliente', this.dadosLogin[0].Dados.idCliente);
          localStorage.setItem('nomeCliente', this.dadosLogin[0].Dados.nomeCliente);
          localStorage.setItem('emailCliente', this.dadosLogin[0].Dados.emailCliente);
          localStorage.setItem('statusCliente', this.dadosLogin[0].Dados.statusCliente);
          localStorage.setItem('dataCadCliente', this.dadosLogin[0].Dados.dataCadCliente);
          localStorage.setItem('fotoCliente', this.dadosLogin[0].Dados.fotoCliente);
          localStorage.setItem('userLogado', 'sim');

          this.servidorUrl.setIdCliente(localStorage.getItem('idCliente'));
          this.servidorUrl.setNomeCliente(this.dadosLogin[0].Dados.nomeCliente);
          this.servidorUrl.setEmailCliente(this.dadosLogin[0].Dados.emailCliente);
          this.servidorUrl.setStatusCliente(this.dadosLogin[0].Dados.statusCliente);
          this.servidorUrl.setDataCadCliente(this.dadosLogin[0].Dados.dataCadCliente);
          this.servidorUrl.setFotoCliente(this.dadosLogin[0].Dados.fotoCliente);

          this.nav.navigateBack('/tabs/pg/perfil');

        }else{
          this.servidorUrl.Alerta('Olá', this.dadosLogin[0].Dados.nomeCliente + ', entre em contanto com um administrador.');
        }
        }else{
          this.servidorUrl.Alerta('Atenção!', 'Usuario ou senha invalido.');
        }
     })
    }
  }

  cadCliente(){
    if(this.nome == undefined || this.email == undefined || this.senha == undefined){
      this.servidorUrl.Alerta('Atenção!', 'Preencha todos os campos');
    }else{
      this.cadDados(this.cadastro.value).subscribe(
        data => {
          console.log('Erro de cadastro')
          this.servidorUrl.Alerta('Opps!!', this.nome + ', erro ao realizar o cadastro, tente novamente mais tarde.');
        },
        err => {
          console.log('Teste de cadastro')
          this.servidorUrl.Alerta('Seja bem vindo(a)', this.nome + ', cadastro realizado com sucesso!')
          this.type = "log";
        }
      );
    }
  };
cadDados(dadosCad){
  let cabecalho = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  return this.http.post(this.servidorUrl.pegarUrl()+'cadastro.php', dadosCad, {
    headers: cabecalho
  }).pipe(map((res) => { return res }));
};
}// FIM DA CLASS