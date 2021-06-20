import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  colapsa(){
    
  }

  cambiaClase(){
    console.log('Cambia clase');
    let boton = document.getElementById('boton');
    let div   = document.getElementById('navbarTogglerDemo02');
    if( boton.classList.length === 1 ){
      div.classList.remove('collapse');
      div.classList.remove('show');
      setTimeout(() => {        
        boton.classList.add('collapsed');
        boton.setAttribute('aria-expanded', 'false');
        div.classList.add('collapsing');
      }, 2000);
      setTimeout(() => {
        div.classList.remove('collapsing');
        div.classList.add('collapse');
      }, 2000);
    }
  }
}
