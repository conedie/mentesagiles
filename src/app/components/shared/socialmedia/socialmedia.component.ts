import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.scss']
})
export class SocialmediaComponent implements OnInit {
  isAuth: boolean = false;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$
    .subscribe(data =>{
      this.isAuth = true;
    });
  }

}
