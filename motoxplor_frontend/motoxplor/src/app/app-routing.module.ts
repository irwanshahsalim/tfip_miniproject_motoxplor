import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RoutesComponent } from './components/routes/routes.component';
import { MapComponent } from './components/map/map.component';
import { ConnectComponent } from './components/connect/connect.component';

const routes: Routes = [
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full',
  title: 'Home || Motoxplor'
},
{
  path: 'home',
  component: LandingPageComponent,
  title: 'Home || Motoxplor'
},
{
  path: 'login',
  component: LoginComponent,
  title: 'login || Motoxplor'
},
{
  path: 'signup',
  component: SignupComponent,
  title: 'signup || Motoxplor'
},
{
  path: 'routes',
  component: RoutesComponent,
  title: 'profile || Motoxplor'
},
{
  path: 'profile',
  component: ProfileComponent,
  title: 'profile || Motoxplor'
},
{
  path: 'map',
  component: MapComponent,
  title: 'map || Motoxplor'
},
{
  path: 'connect',
  component: ConnectComponent,
  title: 'connect || Motoxplor'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
