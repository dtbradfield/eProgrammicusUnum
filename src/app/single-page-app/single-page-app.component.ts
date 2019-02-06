import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-single-page-app',
  templateUrl: './single-page-app.component.html',
  styleUrls: ['./single-page-app.component.css']
})
export class SinglePageAppComponent implements OnInit {
  deviceInfo= null;


  constructor( private deviceService: DeviceDetectorService ) { this.detectMobile(); }

  ngOnInit() {
  }

  detectMobile() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
  }

}
