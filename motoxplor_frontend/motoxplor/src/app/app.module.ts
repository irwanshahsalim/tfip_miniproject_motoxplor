import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RoutesComponent } from './components/routes/routes.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { ConnectComponent } from './components/connect/connect.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    RoutesComponent,
    LandingPageComponent,
    MapComponent,
    ConnectComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT7Drg7-0cLPWId5AErlvqztMxocDx6UM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
