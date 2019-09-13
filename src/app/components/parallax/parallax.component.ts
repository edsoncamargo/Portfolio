import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  LinkedIn: string = "https://www.linkedin.com/in/edsoncmenezes/";
  github: string = "https://github.com/edsoncamargo";
  facebook: string = "https://www.facebook.com/EdsonCamargo1999";
  instagram: string = "https://www.instagram.com/_d1nh0/";


  constructor() { }

  ngOnInit() {
  }

}
