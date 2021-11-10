import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admisiones',
  templateUrl: './admisiones.component.html',
  styleUrls: ['./admisiones.component.scss']
})
export class AdmisionesComponent implements OnInit {

  datajumbo1:any = {
    title: '¡Déjanos un mensaje!',
    content: [
      'Nos comunicaremos contigo a la mayor brevedad.'
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
