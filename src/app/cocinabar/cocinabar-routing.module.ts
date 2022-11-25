import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../core/components/page-not-found/page-not-found.component';
import { CocinabarComponent } from './cocinabar.component';


const routes: Routes = [
  { path: 'cocina', component: CocinabarComponent, data: {path: 'cocina'}},
  { path: 'bar', component: CocinabarComponent, data: {path: 'bar'}},
  { path: '', pathMatch: 'full', redirectTo: 'cocina' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocinabarRoutingModule { }
