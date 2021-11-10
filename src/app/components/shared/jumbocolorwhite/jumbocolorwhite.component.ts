import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbocolorwhite',
  templateUrl: './jumbocolorwhite.component.html',
  styleUrls: ['./jumbocolorwhite.component.scss']
})
export class JumbocolorwhiteComponent implements OnInit {

  @Input() dataJumbo:any;

  constructor() { }

  ngOnInit(): void {
  }

}
