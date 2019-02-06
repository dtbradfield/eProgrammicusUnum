import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DeviceDetectorModule } from 'ngx-device-detector';
 
import { AppComponent } from './app.component';
import { TheProgrammerComponent } from './trifold/the-programmer/the-programmer.component';
import { TheManComponent } from './trifold/the-man/the-man.component';
import { TheWriterComponent } from './trifold/the-writer/the-writer.component';
import { LandingComponent } from './landing/landing.component';
import { StarredConfigService } from './starred.service';
import { SinglePageAppComponent } from './single-page-app/single-page-app.component';
import { SinglePageAppComponentMobile } from './single-page-app/single-page-app.mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    TheProgrammerComponent,
    TheManComponent,
    TheWriterComponent,
    LandingComponent,
    SinglePageAppComponent,
    SinglePageAppComponentMobile
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [
    StarredConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
