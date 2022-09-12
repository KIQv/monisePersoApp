import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../servidor/url.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'; /*IMPORTADO NA PASTA @ANGULAR */

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.page.html',
  styleUrls: ['./lista-produto.page.scss'],
})
export class ListaProdutoPage implements OnInit {

  produtos:any;

  produtoItem: Array<{
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

  produtoItemTodos: Array<{
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
  
  constructor(public http: HttpClient, public servidorUrl: UrlService) { /* HTTP papel principal = TRABALHAR COM URL */ 
    
  this.listaProduto();
  this.produtoItem = [];

  }

  ngOnInit() {
  }

  listaProduto(){
    // Buscar os produtos
    this.http.get(this.servidorUrl.pegarUrl() + 'lista-produto.php').pipe(map(res => res)).subscribe(listaDados => {
      this.produtos = listaDados;
    console.log(this.produtos);

    for (let i = 0; i < this.produtos.length; i++){

      this.produtoItem.push({
        idProduto:listaDados[i]['idProduto'],
        nomeProduto:listaDados[i]['nomeProduto'],
        descProduto:listaDados[i]['descProduto'],
        tipoProduto:listaDados[i]['tipoProduto'],
        valorProduto:listaDados[i]['valorProduto'],
        dataCadProduto:listaDados[i]['dataCadProduto'],
        fotoProduto1:listaDados[i]['fotoProduto1'],
        fotoProduto2:listaDados[i]['fotoProduto2'],
        fotoProduto3:listaDados[i]['fotoProduto3'],
        fotoProduto4:listaDados[i]['fotoProduto4'],
        destaqueProduto:listaDados[i]['destaqueProduto'],
        statusProduto:listaDados[i]['statusProduto']
      });
    } // FIM FOR

    this.produtoItemTodos = this.produtoItem;

  });

} // FIM LISTA PRODUTOS

// Método de pesquisa
getItems(ev: any) {
  // Definir o valor da barra de pesquisa
  const val = ev.target.value;

  // Se o valor for um texto (string) vazia não filtre os items
  if (val && val.trim() != '') {
    this.produtoItem = this.produtoItemTodos.filter((produtos) => {
      return (produtos.nomeProduto.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });
  }else{
    this.produtoItem = this.produtoItemTodos;
  }
  console.log(this.produtoItem);
}

}


