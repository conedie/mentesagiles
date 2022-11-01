import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-iconos-contacto',
  templateUrl: './iconos-contacto.component.html',
  styleUrls: ['./iconos-contacto.component.scss']
})
export class IconosContactoComponent implements OnInit {

  @Input() dataIcons:any;
  constructor() {
    console.log(this.dataIcons);
  }

  ngOnInit(): void {
    console.log(this.dataIcons);
  }

}
