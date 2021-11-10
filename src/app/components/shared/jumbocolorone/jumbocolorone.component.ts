import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbocolorone',
  templateUrl: './jumbocolorone.component.html',
  styleUrls: ['./jumbocolorone.component.scss']
})
export class JumbocoloroneComponent implements OnInit {

  @Input() dataJumbo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
