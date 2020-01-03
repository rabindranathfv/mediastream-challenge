import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayaoutComponent } from './components/layaout/layaout/layaout.component';

// modules
import { ListModule } from './components/list/list.module';

@NgModule({
  declarations: [
    AppComponent,
    LayaoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
