import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class LoaderComponent implements OnInit {
  show: boolean = false;

  constructor(
    private loaderService: LoaderService

  ) { }

  ngOnInit(): void {
   // this.show = this.loaderService.getShowLoader();

  }

}
