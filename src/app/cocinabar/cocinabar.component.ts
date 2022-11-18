import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CocinabarService } from './services/cocinabar/cocinabar.service';

@Component({
  selector: 'app-cocinabar',
  templateUrl: './cocinabar.component.html',
  styleUrls: ['./cocinabar.component.scss']
})
export class CocinabarComponent implements OnInit {

  serviceName$ = this.activatedRoute.data;

  constructor(
    private readonly cocinabarService: CocinabarService,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log((this.activatedRoute.data as BehaviorSubject<any>).value);
  }

}
