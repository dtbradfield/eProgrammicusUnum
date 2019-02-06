import { Component, OnInit } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  deviceInfo= null;
  public mobileView = false;
  public tabletView = false;
  public desktopView = false;
  loadLanding: boolean = true;
  loadPortfolio: boolean = false;
  loadMobilePortfolio: boolean = false;

  constructor( private deviceService: DeviceDetectorService ) { this.detectMobile();  }

  ngOnInit() {
  }

  detectMobile() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.mobileView = this.deviceService.isMobile();
    this.tabletView = this.deviceService.isTablet();
    this.desktopView = this.deviceService.isDesktop();
  }

  onLoadPortfolio() {
    this.loadLanding = false;
    this.loadPortfolio = true;
    this.loadMobilePortfolio = false;
  }

  onLoadMobilePortfolio() {
    this.loadLanding = false;
    this.loadPortfolio = false;
    this.loadMobilePortfolio = true;
  }

}
