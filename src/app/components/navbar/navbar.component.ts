import { Component, OnInit } from '@angular/core';

declare let $: any;
var scroll = true;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // Navbar
  opacityNavbar: number = 0;

  constructor() { }

  ngOnInit() {
    this.animateScrolling();
    this.activeOpacityNavbar();
    this.activeNavbar();
    this.activeScroll();
  }

  ngOnDestroy(): void {
    scroll = false;
  }

  activeScroll() {
    if (scroll == false) {
      scroll = true;
    }
  }

  onNavbar() {
    $('.navbar-collapse').collapse('toggle');
  }

  animateScrolling() {
    $("a").on('click', function () {
      let select = $(this).attr("href");
      let positionAux = $(select).offset().top;
      let position: number;
      if (select == "#home") {
        position = 0;
      } else if (select == "#about") {
        position = positionAux - 93.5;
      } else if (select == "#projects") {
        position = positionAux + 107;
      } else if (select == "#contact") {
        position = positionAux - 62.505;
      }
      $("html, body").animate({ scrollTop: position }, 600);
    });
  }

  activeNavbar() {
    $(document).scroll(function () {
      if (scroll == true) {
        var opacityNavbar = $(this).scrollTop();
        if (opacityNavbar >= ($("#home").offset().top) && opacityNavbar < ($("#about").offset().top) - 101) {
          $(".home-nav").addClass("active");
          $(".about-nav").removeClass("active");
          $(".services-nav").removeClass("active");
          $(".contact-nav").removeClass("active");
        } else if (opacityNavbar >= ($("#about").offset().top) - 100 && opacityNavbar < ($("#projects").offset().top) + 105) {
          $(".home-nav").removeClass("active");
          $(".about-nav").addClass("active");
          $(".services-nav").removeClass("active");
          $(".contact-nav").removeClass("active");
        } else if (opacityNavbar > ($("#projects").offset().top) + 106 && opacityNavbar < ($("#contact").offset().top) - 71) {
          $(".home-nav").removeClass("active");
          $(".about-nav").removeClass("active");
          $(".services-nav").addClass("active");
          $(".contact-nav").removeClass("active");
        } else if (opacityNavbar >= ($("#contact").offset().top) - 70) {
          $(".home-nav").removeClass("active");
          $(".about-nav").removeClass("active");
          $(".services-nav").removeClass("active");
          $(".contact-nav").addClass("active");
        }
      }
    });
  }

  activeOpacityNavbar() {
    $(document).scroll(function () {
      if (scroll == true) {
        var opacityNavbar = $(this).scrollTop();
        if (opacityNavbar > ($("#about").offset().top) - 100) {
          $(".navbar").addClass("opacity-navbar");
        } else {
          $(".navbar").removeClass("opacity-navbar");
        }
      }
    });
  }

}
