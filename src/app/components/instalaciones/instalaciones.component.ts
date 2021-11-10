import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.scss']
})
export class InstalacionesComponent implements OnInit {

  dataJumboOne:any = {
    title: 'Instalaciones',
    content: [
      'Contamos con tres sedes, una ubicada en Colina campestre (cra 54 b N 146-22) Nuestra sede Babys ubicada en San José de Bavaria (cra 70# 175-30) Y nuestra sede campestre ubicada en San José de Bavaria (cra 70No 173A-90) Los estudiantes rotan por las aulas del jardín, esto favorece el interés y la atención de los niños y niñas al desarrollar sus actividades.'
    ]
  };

  dataCardUno:any = [
    {
      title: 'Sede Campestre',
      imgprimary:'assets/img/sedes/campestre1.jpg',
      images:[
        'assets/img/sedes/campestre2.jpg'
      ],
      content:['aqui descripcion de la sede'],
      link: 'https://www.youtube.com/watch?v=4dMgxvMMW0w&t=43s',
      namebtn: 'Ver Video!',
      linktwo:'https://www.google.com/maps/place/Jard%C3%ADn+Infantil+Mentes+%C3%81giles+Norte+de+Bogot%C3%A1/@4.7628003,-74.0639867,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f856b2556f92b:0x494f5c5260c45efb!8m2!3d4.762795!4d-74.061798',
      namebtntwo:'Ver ubicación en google maps'
    },
    {
      title: 'Sede Colina',
      imgprimary:'assets/img/sedes/colina1.jpg',
      images:[
        'assets/img/sedes/colina2.jpg'
      ],
      content:['aqui descripcion de la sede'],
      link: 'https://www.youtube.com/watch?v=9T2RHO-iRlM',
      namebtn: 'Ver Video!',
      linktwo:'https://www.google.com/maps/place/Jard%C3%ADn+infantil+Mentes+%C3%81giles+Colina/@4.7284476,-74.0599273,16z/data=!4m9!1m2!2m1!1sJard%C3%ADn+Infantil+Mentes+%C3%81giles+colina!3m5!1s0x8e3f85cb1eb1f3f7:0xa5e9303c295942ed!8m2!3d4.7306288!4d-74.0572236!15sCiZKYXJkw61uIEluZmFudGlsIE1lbnRlcyDDgWdpbGVzIGNvbGluYZIBDGtpbmRlcmdhcnRlbg',
      namebtntwo:'Ver ubicación en google maps'
    },
    {
      title: 'Sede Babys',
      imgprimary:'assets/img/sedes/babys1.jpg',
      images:[
        'assets/img/sedes/babys2.jpg'
      ],
      content:['aqui descripcion de la sede'],
      link: 'https://www.youtube.com/watch?v=dbi0_ZEIbvc&t=39s',
      namebtn: 'Ver Video!',
      linktwo:'https://www.google.com/maps/place/Jard%C3%ADn+Infantil+Mentes+%C3%81giles+Norte+de+Bogot%C3%A1/@4.7628003,-74.0639867,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f856b2556f92b:0x494f5c5260c45efb!8m2!3d4.762795!4d-74.061798',
      namebtntwo:'Ver ubicación en google maps'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
