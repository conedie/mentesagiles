import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbocolorred',
  templateUrl: './jumbocolorred.component.html',
  styleUrls: ['./jumbocolorred.component.scss']
})
export class JumbocolorredComponent implements OnInit {

  @Input() dataJumbo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
