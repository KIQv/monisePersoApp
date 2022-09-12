import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';         /* classe responsável por visualizar a URL atual */
import { UrlService } from '../../servidor/url.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {

  idProduto:any;
  dadosDetalhe:any;
  
  dados: Array<{
    idProduto: any,
    nomeProduto: any,
    descProduto: any,
    tipoProduto: any,
    valorProduto: any,
    dataCadProduto: any,
    fotoProduto1: any,
    fotoProduto2: any,
    fotoProduto3: any,
    fotoProduto4: any,
    destaqueProduto: any,
    statusProduto: any
  }>;

  constructor(public dadosUrl: ActivatedRoute, public servidorUrl: UrlService, public http:HttpClient ) {                        /* é importante declararmos importar as classes que vamos usar */
    this.dadosUrl.params.subscribe(parametroId => {             /* a variavel parametroId recebe todos os valores do método subscribe */
      this.idProduto = parametroId.id;                          /* aqui em .id vai o nome que colocamos lá em tabs-routing.module  */
      console.log(this.idProduto);                              /* aqui pode entrar um c.log para ver qual id a pg recebe ao abrir */
      this.listaDetalhe();
      this.dados = [];
    })
  }

  ngOnInit() {
  }

  listaDetalhe(){
    this.http.get(this.servidorUrl.pegarUrl() + 'detalhe.php?idProduto=' + this.idProduto).pipe(map(res => res)).subscribe(data => {                                              /* map irá mapear tudo em res, e irá transformar em objeto inteligente res - com o http do angular ele já reconhece como .json nativamente */
      this.dadosDetalhe = data;
      console.log(this.dadosDetalhe); //  
                                                        /* aqui pode entrar um c.log para ver o .json  */
      for (let i = 0; i < this.dadosDetalhe.length; i++) {                                  /* este for alimenta a array dados com todos os dados */
        this.dados.push({
          idProduto:data[i]['idProduto'],
          nomeProduto:data[i]['nomeProduto'],
          descProduto:data[i]['descProduto'],
          tipoProduto:data[i]['tipoProduto'],
          valorProduto:data[i]['valorProduto'],
          dataCadProduto:data[i]['dataCadProduto'],
          fotoProduto1:data[i]['fotoProduto1'],
          fotoProduto2:data[i]['fotoProduto2'],
          fotoProduto3:data[i]['fotoProduto3'],
          fotoProduto4:data[i]['fotoProduto4'],
          destaqueProduto:data[i]['destaqueProduto'],
          statusProduto:data[i]['statusProduto']
        });
      }
    });   
  }
}