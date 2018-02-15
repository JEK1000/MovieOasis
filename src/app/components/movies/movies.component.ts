import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../authguard';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

	popularList: Array<Object>;
	theatersList: Array<Object>;
  theaterZip: Array<Object>;
	searchStr: string;
  genreSearch: string;
  amazon: Array<Object>;
  
  //searchZip: string;
  
	//zipSearch: Array<Object>;
  searchRes: Array<Object>;
  genres: Array<Object>;

  api:string;


  constructor(private _movieService: MovieService, private auth: AuthService, private router: ActivatedRoute) { 

  		this._movieService.getPopular().subscribe(res => {
  			this.popularList = res.results;
  		});

  		this._movieService.getInTheaters().subscribe(res => {
  			this.theatersList = res.results;
  		});

       this._movieService.getGenre().subscribe(res => {
      this.genres = res.genres;
      });

       this._movieService.getProducts().subscribe(res => {
      this.amazon = res.amazon;
      });

      this.api ='';
      
  }

/*
  findZip(){
    this._movieService.findZip(this.searchZip).subscribe(res => {
      this.zipSearch = res;
  })
}

*/
  searchMovies(){

  	this._movieService.searchMovies(this.searchStr).subscribe(res => {
  		this.searchRes = res.results;
  	})
}


  ngOnInit() {

}

}

