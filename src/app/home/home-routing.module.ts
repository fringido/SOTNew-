import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarEntradaHabitacionComponent } from './components/dar-entrada-habitacion/dar-entrada-habitacion.component';
import { HomeComponent } from './home.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'rolesYPermisos',
        loadChildren: () => import('./modals/roles-y-permisos/roles-y-permisos.module').then((m) => m.RolesYPermisosModule)
      },{
        path: 'rentaHabitacion',
        loadChildren: () => import('./inicio-habitaciones/entrada-habitacion/entrada-habitacion.module').then((m) => m.EntradaHabitacionModule)
      }
      ,{
        path: 'roomService',
        loadChildren: () => import('./inicio-habitaciones/room-service/room-service.module').then((m) => m.RoomServiceModule)
      },{
        path: 'entradaDeHabitacion',
        component: DarEntradaHabitacionComponent
      },
      {
        path: 'salida',
        loadChildren: () => import('../salida/salida.module').then((m) => m.SalidaModule)
      },{
        path: 'mantenimiento',
        loadChildren:() => import('./inicio-habitaciones/mantenimiento/mantenimiento.module').then((m) => m.MantenimientoModule)
      }
      ,{
        path: 'deshabilitarHabitacion',
        loadChildren:() => import('./inicio-habitaciones/deshabilitar-habitacion/deshabilitar-habitacion.module').then((m) => m.DeshabilitarHabitacionModule)
      },
      { path: 'reservacion',
        loadChildren: () => import('./inicio-habitaciones/reservacion/reservacion.module').then(m => m.ReservacionModule)
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
