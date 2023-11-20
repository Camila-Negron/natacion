import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService,private router: Router) {}

  ngOnInit():void{

    
  }
  logOut(){
    this.auth.logout();
  }

  isAccordionOpen = false;

  toggleAccordion(): void {
    this.isAccordionOpen = !this.isAccordionOpen;
  }

  piscina(): void {
    this.router.navigate(['/piscina']);
  }
  

}
