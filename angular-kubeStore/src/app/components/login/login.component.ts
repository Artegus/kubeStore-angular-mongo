import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { ServiceCubesService } from 'src/app/services/service-cubes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();

  constructor(
    private serviceCubes : ServiceCubesService,
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  access () {

  }

  cancel () {
    
  }

}
