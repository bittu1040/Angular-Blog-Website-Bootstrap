import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoadmapsComponent } from './components/roadmaps/roadmaps.component';
import { AngularComponent } from './components/angular/angular.component';
import { RevisionCheatSheetComponent } from './components/revision-cheat-sheet/revision-cheat-sheet.component';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    RoadmapsComponent,
    AngularComponent,
    RevisionCheatSheetComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
