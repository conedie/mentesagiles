import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import homeJson from '../../../assets/json/home.json';

export interface CardImgLeftInter{
  title:string;
  content:string;
  img:string;
  textstrong:string;
}

export interface JumboColorOneInter{
  title:string;
  titleSub:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataPage: any = homeJson;
  urlDanger:SafeResourceUrl = '';

  constructor(private care:DomSanitizer) {
    this.urlDanger = this.care.bypassSecurityTrustResourceUrl(this.dataPage.urlyoutube);
  }

  ngOnInit(): void {
  }


}
