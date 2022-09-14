import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../servidor/url.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  produtos:any;
  constructor(public servidorUrl: UrlService, public http: HttpClient) { /* HTTP papel principal = TRABALHAR COM URL */ 
    
  this.listaProduto();

  }

  slide = {
    slidesPerView: 1.2,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
    autoplaySpeed: 2000,
  }

  slideProduto = {
    slidesPerView: 1.2,
    centeredSlides: true,
    loop: false,
    spaceBetween: 10,
    /* autoplay:true,
    autoplaySpeed: 2000, */
  }

  ngOnInit() {
  }

  listaProduto(){
    // Buscar os serviços
    this.http.get(this.servidorUrl.pegarUrl() + 'home-produto.php').pipe(map(res => res)).subscribe(listaDados => {
      this.produtos = listaDados;
    })
  }
}