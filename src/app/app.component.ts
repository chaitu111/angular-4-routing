import { Component, DoCheck } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  DoCheck {

 locationurl = '';
 routerurl   = '';

 constructor(private location: Location , private router: Router ){ }

  ngDoCheck()
  {
     this.locationurl = this.location.path();
     this.routerurl = this.router.url;
  }

}
