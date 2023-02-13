import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
  culebrita: string;
  tamagotchi: string;
  hojadevida: string;
  portafolio: string;

  constructor(){
    this.culebrita = '/assets/imagenes/culebrita.jpeg';
    this.tamagotchi = '/assets/imagenes/tamagotchi.jpg';
    this.hojadevida = '/assets/imagenes/hojadevida.png';
    this.portafolio = '/assets/imagenes/portafolio.jpeg';
  }

}