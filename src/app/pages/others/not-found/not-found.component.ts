import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Erro: 404 Página não encontrada - Edson Camargo Menezes");
  }

  goToHomepage() {
    this.router.navigate(['/']);
  }

}
