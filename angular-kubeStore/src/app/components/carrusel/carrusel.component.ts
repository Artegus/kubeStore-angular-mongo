import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  images = ["/assets/cube.png","/assets/cube_1.jpeg","/assets/cube_2.jpg"];

  constructor() { }

  ngOnInit(): void {
  }

}
