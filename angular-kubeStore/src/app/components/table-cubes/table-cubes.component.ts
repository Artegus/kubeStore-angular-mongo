import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Cube } from 'src/app/classes/cube'
import { ServiceCubesService } from 'src/app/services/service-cubes.service'

@Component({
  selector: 'app-table-cubes',
  templateUrl: './table-cubes.component.html',
  styleUrls: ['./table-cubes.component.css']
})

export class TableCubesComponent implements OnInit {

  listOfCubes : Cube[] = [];
  cubeSelected : Cube = new Cube();
  details = false;

  constructor(
    private serviceCubes : ServiceCubesService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.getCubes();
  }

  getCubes () {
    this.serviceCubes.getCubes().subscribe( list => this.listOfCubes = list);
  }

  displayDetails (cube : Cube) {
    this.details = true;
    this.cubeSelected = cube;
  }

  closeDetails () {
    this.details = false;
  }

  delete ( id : number ) {
    this.serviceCubes.removeCube(id).subscribe( response => {
      if (response.status == 'success') {
        
        alert('Cube removed');
        
        const position = this.listOfCubes.findIndex(cube => cube._id == id)
        this.listOfCubes.splice(position, 1);
      } else {
        alert('Error deleting the cube')
      }
    })
  }

  edit ( id : number ) {
    this._router.navigate(['/editCube/' + id])
  }

}
