import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ClanComponent } from './clan/clan.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    HomeComponent,
    ClanComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot( ROUTES )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
