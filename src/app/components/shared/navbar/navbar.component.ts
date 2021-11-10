import { Component, Inject, OnInit } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuth: boolean = false;
  constructor( public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$
    .subscribe(data =>{
      this.isAuth = true;
    });
  }

}
