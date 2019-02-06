import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-page-app-mobile',
  templateUrl: './single-page-app.mobile.html',
  styleUrls: ['./single-page-app.mobile.css']
})
export class SinglePageAppComponentMobile implements OnInit {
  navbarOpen: boolean = false;
  theManLoaded: boolean = true;
  theProgrammerLoaded: boolean = false;
  theWriterLoaded: boolean = false;
  
  constructor(  ) { }

  ngOnInit() {
  }

  toggleNav() {
    this.navbarOpen = !this.navbarOpen;
  }

  loadTheMan() {
    this.theManLoaded = true;
    this.theProgrammerLoaded = false;
    this.theWriterLoaded = false;
    this.navbarOpen = !this.navbarOpen;
  }

  loadTheProgrammer() {
    this.theManLoaded = false;
    this.theProgrammerLoaded = true;
    this.theWriterLoaded = false;
    this.navbarOpen = !this.navbarOpen;
  }

  loadTheWriter() {
    this.theManLoaded = false;
    this.theProgrammerLoaded = false;
    this.theWriterLoaded = true;
    this.navbarOpen = !this.navbarOpen;
  }

}
