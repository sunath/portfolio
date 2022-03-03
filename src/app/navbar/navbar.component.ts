import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMobileButtonOpened:boolean  = false;
  isToggled:boolean = false;
  isMobileResponsive:boolean;

  showNavlinks:boolean;

  constructor() { 
    this.isMobileResponsive = window.innerWidth <= 700;
    this.showNavlinks = !this.isMobileResponsive;
    window.addEventListener('resize',(e) => {
      this.isMobileResponsive = window.innerWidth <= 700;
    })
  }

  ngOnInit(): void {
  }

  onNavbarStateChange(){
    this.isToggled = !this.isToggled;
    this.showNavlinks = this.isMobileResponsive && this.isToggled
  }

}
