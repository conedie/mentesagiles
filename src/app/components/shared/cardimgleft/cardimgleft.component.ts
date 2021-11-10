import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cardimgleft',
  templateUrl: './cardimgleft.component.html',
  styleUrls: ['./cardimgleft.component.scss']
})
export class CardimgleftComponent implements OnInit {

@Input() dataCard:any;

  constructor() { }

  ngOnInit(): void {
  }

}
