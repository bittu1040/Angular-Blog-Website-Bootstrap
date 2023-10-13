import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';
import { HomeComponent } from './components/home/home.component';
import { RevisionCheatSheetComponent } from './components/revision-cheat-sheet/revision-cheat-sheet.component';
import { RoadmapsComponent } from './components/roadmaps/roadmaps.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'angular', component: AngularComponent},
  {path: 'revision-cheat-sheet', component: RevisionCheatSheetComponent},
  {path: 'roadmaps', component: RoadmapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
