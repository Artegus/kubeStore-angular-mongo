import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCubeComponent } from './components/add-cube/add-cube.component';
import { LoginComponent } from './components/login/login.component';
import { OffersCubesComponent } from './components/offers-cubes/offers-cubes.component';
import { TableCubesComponent } from './components/table-cubes/table-cubes.component';

const routes: Routes = [
  { path : '', redirectTo: '/tableCubes', pathMatch: 'full' },
  { path : 'tableCubes', component : TableCubesComponent },
  { path : 'newCube', component : AddCubeComponent },
  { path : 'editCube/:id', component : AddCubeComponent},
  { path : 'login', component : LoginComponent},
  { path : 'offersCubes', component : OffersCubesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
