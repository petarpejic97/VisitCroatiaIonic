import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'citylist', loadChildren: './citylist/citylist.module#CitylistPageModule' },
  { path: 'city/:itemname', loadChildren: './city/city.module#CityPageModule' },
  { path: 'eventlist', loadChildren: './eventlist/eventlist.module#EventlistPageModule' },
  { path: 'create-event', loadChildren: './create-event/create-event.module#CreateEventPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
