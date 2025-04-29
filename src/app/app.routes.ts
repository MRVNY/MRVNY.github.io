import { Routes } from '@angular/router';
import { HomeComponent} from '@components/home/home.component';
import { OtwComponent } from './otw/otw.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'otw', component: OtwComponent},
];
