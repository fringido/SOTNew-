import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CocinabarService } from './services/cocinabar/cocinabar.service';

@Component({
  selector: 'app-cocinabar',
  templateUrl: './cocinabar.component.html',
  styleUrls: ['./cocinabar.component.scss']
})
export class CocinabarComponent implements OnInit {

  serviceName$ = this.activatedRoute.data;

  commands: {name: string, amount: number, timeStart: number, specifications: string}[] = [
    {name: 'Tacos', amount: 5, timeStart: 1, specifications: 'Sin chile'},
    {name: 'Enchiladas', amount: 5, timeStart: 14, specifications: 'Sin Salsa, los puros totopos'},
    {name: 'Fruta', amount: 2, timeStart: 20, specifications: 'Sin chile'},
  ];

  constructor(
    private readonly cocinabarService: CocinabarService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    console.log((this.activatedRoute.data as BehaviorSubject<any>).value);
  }

  goBack() {
    this.router.navigate(['login'])
  }
}
