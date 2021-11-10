import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbocard',
  templateUrl: './jumbocard.component.html',
  styleUrls: ['./jumbocard.component.scss']
})
export class JumbocardComponent implements OnInit {

  @Input() dataJumbo:any;

  constructor() { }

  ngOnInit(): void {
  }

}
