import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbopagos',
  templateUrl: './jumbopagos.component.html',
  styleUrls: ['./jumbopagos.component.scss']
})
export class JumbopagosComponent implements OnInit {
@Input() dataJumbo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
