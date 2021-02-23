import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  images = ["/assets/foto1.jpg","/assets/foto2.jpg","/assets/foto3.jpg"];

  constructor() { }

  ngOnInit(): void {
  }

}
