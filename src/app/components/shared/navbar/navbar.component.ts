import { Component, Inject, OnInit } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
import JsonContactanos from '../../../../assets/json/contactanos.json'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dataPages:any = JsonContactanos;

  isAuth: boolean = false;
  constructor( public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$
    .subscribe(data =>{
      this.isAuth = true;
    });
  }

}
