import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppscreenComponent } from './components/appscreen/appscreen.component';
import { StartmenuComponent } from './components/appscreen/startmenu/startmenu.component';
import { MovieresultComponent } from './components/appscreen/movieresult/movieresult.component';

@NgModule({
  declarations: [
    AppComponent,
    AppscreenComponent,
    StartmenuComponent,
    MovieresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
