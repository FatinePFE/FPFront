import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PropositionComponent} from "./components/proposition/proposition.component";


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'propositions', component: PropositionComponent },

  // otherwise redirect to profile
  { path: '**', redirectTo: '/home' }
];

export const routing = RouterModule.forRoot(appRoutes);
