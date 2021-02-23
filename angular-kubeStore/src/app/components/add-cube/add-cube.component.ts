import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCubesService } from 'src/app/services/service-cubes.service'
import { Cube } from 'src/app/classes/cube'

@Component({
  selector: 'app-add-cube',
  templateUrl: './add-cube.component.html',
  styleUrls: ['./add-cube.component.css']
})

export class AddCubeComponent implements OnInit {

  cube : Cube = new Cube();
  title = "New cube";
  constructor(
    private ServiceCubes : ServiceCubesService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(parametro => {
      if (parametro.id) {
        this.title = "Edit cube";
        this.ServiceCubes.getCube(parametro.id)
          .subscribe(cube => this.cube = cube);
      }
    });
  }

  addNew() {
    this.ServiceCubes.addCube(this.cube).subscribe(respuesta => {
      if (respuesta.status === 'success') {
        alert("Alta realizada");
        this._router.navigate(['/tableCubes']);
      } else {
        alert("Alta no realizada")
      }
    })
  }
  edit() {
    this.ServiceCubes.editCube(this.cube).subscribe(respuesta => {
      if (respuesta.status === 'success') {
        alert("Modificación realizada");
        this._router.navigate(['/tableCubes']);
      } else {
        alert("Modificación no realizada")
      }
    })
  }
  cancel() {
    this._router.navigate(['/tableCubes']);
  }

}
