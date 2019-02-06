import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { DeviceDetectorModule } from 'ngx-device-detector';
 
import { AppComponent } from './app.component';
import { TheProgrammerComponent } from './trifold/the-programmer/the-programmer.component';
import { TheManComponent } from './trifold/the-man/the-man.component';
import { TheWriterComponent } from './trifold/the-writer/the-writer.component';
import { LandingComponent } from './landing/landing.component';
import { StarredConfigService } from './starred.service';
import { SinglePageAppComponent } from './single-page-app/single-page-app.component';
import { SinglePageAppComponentMobile } from './single-page-app/single-page-app.mobile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

const appRoutes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'portfolio', component: SinglePageAppComponent },
  { path: 'mobile', component: SinglePageAppComponentMobile },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TheProgrammerComponent,
    TheManComponent,
    TheWriterComponent,
    LandingComponent,
    SinglePageAppComponent,
    SinglePageAppComponentMobile,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    StarredConfigService,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
