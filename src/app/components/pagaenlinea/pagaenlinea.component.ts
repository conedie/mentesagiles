import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagaenlinea',
  templateUrl: './pagaenlinea.component.html',
  styleUrls: ['./pagaenlinea.component.scss']
})
export class PagaenlineaComponent implements OnInit {

  dataPagos:any = {
    title:'Paga en línea',
    content:['Paga a través de nuestro botón PSE'],
    imgjardin: 'assets/img/pagos/logo.png',
    imgpagos: 'assets/img/pagos/payOnline.jpg',
    link:'https://zonapagos.com/t_jardininfantilmentesagiles'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
