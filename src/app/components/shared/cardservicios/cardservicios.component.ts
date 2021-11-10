import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardservicios',
  templateUrl: './cardservicios.component.html',
  styleUrls: ['./cardservicios.component.scss']
})
export class CardserviciosComponent implements OnInit {

  @Input() dataCard:any;


  constructor() { }

  ngOnInit(): void {
  }

}
