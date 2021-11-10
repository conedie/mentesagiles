import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-autoplayyoutube',
  templateUrl: './autoplayyoutube.component.html',
  styleUrls: ['./autoplayyoutube.component.scss']
})
export class AutoplayyoutubeComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');

  	tag.src = "https://www.youtube.com/iframe_api";

  	document.body.appendChild(tag);
  }


}
