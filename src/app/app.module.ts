import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoadmapsComponent } from './components/roadmaps/roadmaps.component';
import { AngularComponent } from './components/angular/angular.component';
import { RevisionCheatSheetComponent } from './components/revision-cheat-sheet/revision-cheat-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    RoadmapsComponent,
    AngularComponent,
    RevisionCheatSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
