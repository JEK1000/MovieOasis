import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';
import { AuthService } from './services/auth.service';
import { Inject,Injectable, HostListener } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieService]
})

export class AppComponent {
  title = 'app';
  public fixed: boolean = false; 

 constructor( public auth: AuthService){

 	auth.handleAuthentication();

 }
/*
 @HostListener("window:scroll", [])
         onWindowScroll() {
            let num = this.doc.body.scrollTop;
            if ( num > 0 ) {
            this.fixed = true;
            }else if (this.fixed && num < 5) {
            this.fixed = false;
        }
    }
    */

}
