import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCubeComponent } from './components/add-cube/add-cube.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { TableCubesComponent } from './components/table-cubes/table-cubes.component';
import { OffersCubesComponent } from './components/offers-cubes/offers-cubes.component';
import { ServiceCubesService } from './services/service-cubes.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddCubeComponent,
    CarruselComponent,
    LoginComponent,
    MenuComponent,
    TableCubesComponent,
    OffersCubesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // After
    ReactiveFormsModule, // After
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ServiceCubesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
