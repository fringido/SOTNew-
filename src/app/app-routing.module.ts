import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
  { path: 'cocina-bar', loadChildren: () => import('./cocinabar/cocinabar.module').then((m) => m.CocinabarModule) },
  { path: 'hotel', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'room-service', loadChildren: () => import('./home/inicio-habitaciones/room-service/room-service.module').then(m => m.RoomServiceModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
