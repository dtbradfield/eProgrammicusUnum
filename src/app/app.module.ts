import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TheProgrammerComponent } from './trifold/the-programmer/the-programmer.component';
import { TheManComponent } from './trifold/the-man/the-man.component';
import { TheWriterComponent } from './trifold/the-writer/the-writer.component';
import { LandingComponent } from './landing/landing.component';
import { StarredConfigService } from './starred.service';
import { SinglePageAppComponent } from './single-page-app/single-page-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'app', component: SinglePageAppComponent },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StarredConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
