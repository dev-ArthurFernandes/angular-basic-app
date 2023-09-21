import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';

const routerConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page' 
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Cattle details'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register Cattle'
  }
];

export default routerConfig;