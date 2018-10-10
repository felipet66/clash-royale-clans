import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClanComponent } from './clan/clan.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clan', component: ClanComponent },
  { path: 'clan/:tag' , component: ClanComponent }
];
