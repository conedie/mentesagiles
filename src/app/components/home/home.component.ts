import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

export interface CardImgLeftInter{
  title:string;
  content:string;
  img:string;
  textstrong:string;
}

export interface JumboColorOneInter{
  title:string;
  titleSub:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:any = [
      '/assets/img/carousel1.jpg'
  ]

  dataCard:CardImgLeftInter ={
      title: 'Bienvenidos a MAJI',
      content: 'Somos un Jardín infantil diferente, con un proyecto único, enfocados en las experiencias y el juego como base de nuestro aprendizaje, ¡Queremos que sigan siendo niños, aprendan y sean grandes seres humanos! Conoce nuestro proyecto pedagógico de',
      img:'assets/img/promo1.png',
      textstrong:'PRESENCIAL Y VIRTUAL PARA EL 2022'
    };

    dataJumboColorOne:JumboColorOneInter ={
      title: '¡CONTÁCTANOS!',
      titleSub: '312 5737186 - 320 8390537'
    };

  constructor(private route:Router) {

  }

  ngOnInit(): void {
  }

}
