import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  dataFooter:any = [
    {
      title:'Sede Campestre',
      phone:'320 839 0537 – 312 573 7186',
      email:'mentesagiles@gmail.com',
      addrees:'Cra 70 # 173 A – 90 – Bogotá D.C.',
      service:'Atención: 8AM – 5PM'
    },
    {
      title:'Sede Colina',
      phone:'320 839 0537 – 312 573 7186',
      email:'mentesagiles@gmail.com',
      addrees:' Cra 54B # 146 – 22 – Bogotá D.C.',
      service:'Atención: 8AM – 5PM'
    },
    {
      title:'Sede Kids',
      phone:'320 839 0537 – 312 573 7186',
      email:'mentesagiles@gmail.com',
      addrees:' Cra 70# 175 – 30 – Bogotá D.C.',
      service:'Atención: 8AM – 5PM'
    },
]

  constructor() { }

  ngOnInit(): void {
  }

}
