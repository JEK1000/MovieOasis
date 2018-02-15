import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { DatePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Output, EventEmitter,Input } from '@angular/core';
import { MoviesComponent } from "../movies/movies.component";

import * as $ from 'jquery';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})


export class MovieComponent implements OnInit {

  movie: Object;
  videos: Object;
  similar: Object;
  cast: Object;
  reviews: Object;
  //show: Object;
$: any;
  //api :string = '';



  url:string;
  safeUrl:any;
  link:string;

  constructor(private router:ActivatedRoute, private _movieService:MovieService, private sanitizer: DomSanitizer, private auth: AuthService) {

  }  
  


updateUrl(id:string){

  this.url = 'https://www.youtube.com/embed/'+ id;
  this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);  
  return this.safeUrl;
}

updateLink(movie:string){

  this.link ='https://www.amazon.com/gp/search?ie=UTF8&tag=moasis1000-20&linkCode=ur2&linkId=e74da28f9b54a5bcd4eff03527ee8138&camp=1789&creative=9325&index=dvd&keywords='+movie;
  return this.link;

}



   /*

   getShowtimes(obj) {
 
var array = obj.showtimes;

var objList = [];
var ticket = obj.ticketURI;


for (var i = 0; i < array.length; i++) {
  if (objList.hasOwnProperty(array[i].theatre.name) === false) {
    objList[array[i].theatre.name] = [array[i].dateTime] ;
  } else {
    objList[array[i].theatre.name].push(array[i].dateTime);
  }

}

return Object.keys(objList).map((key)=>{
  if (objList.hasOwnProperty(key)) {
       return key + objList[key];
     }
     });
 

}
*/

  ngOnInit() {
   
  	this.router.params.subscribe((params) =>{
  		let id = params['id'];
  		this._movieService.getMovie(id).subscribe(movie =>{
  			this.movie = movie;
      });
    });

       this.router.params.subscribe((params) =>{
      let id = params['id'];
      this._movieService.getTrailer(id).subscribe(videos =>{
        this.videos = videos;
  		});
  	});
       this.router.params.subscribe((params) =>{
      let id = params['id'];
      this._movieService.similarMovies(id).subscribe(similar =>{
        this.similar = similar;
      });
    });

         this.router.params.subscribe((params) =>{
      let id = params['id'];
      this._movieService.getCast(id).subscribe(cast =>{
        this.cast = cast;
      });
    });

               this.router.params.subscribe((params) =>{
      let id = params['id'];
      this._movieService.getReviews(id).subscribe(reviews =>{
        this.reviews = reviews;
      });
    });
    
 /*
     this.router.params.subscribe((params) =>{
      let id = params['id'];
      let searchZip = params['searchZip'];
      this._movieService.movieShowings(id,searchZip).subscribe( show =>{
        this.show = show;
      });
    });
   */

   
      
}


}



