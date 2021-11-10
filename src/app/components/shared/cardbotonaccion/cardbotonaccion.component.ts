import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardbotonaccion',
  templateUrl: './cardbotonaccion.component.html',
  styleUrls: ['./cardbotonaccion.component.scss']
})
export class CardbotonaccionComponent implements OnInit {
  @Input() dataCard:any;
  constructor() { }

  ngOnInit(): void {
  }

}
