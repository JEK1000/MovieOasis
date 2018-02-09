import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class GenreComponent implements OnInit {

  genre: Array<Object>;
  genres: Array<Object>;
  genres2:Array<Object>;
  genres3:Array<Object>;
  api:string;


  constructor(private _movieService: MovieService,private router: ActivatedRoute) {     

  	   this._movieService.getGenre().subscribe(res => {
         this.genre = res.genres;
      });
}


  ngOnInit() {
  	       this.router.params.subscribe((params) =>{
      let id = params['id'];
      this._movieService.moviesByGenre(id).subscribe(genres =>{
        this.genres = genres;
      });
    });

                  this.router.params.subscribe((params) =>{
      let id = params['id'];
      this._movieService.moviesByGenre2(id).subscribe(genres2 =>{
        this.genres2 = genres2;
      });
    });


                  this.router.params.subscribe((params) =>{
      let id = params['id'];
      this._movieService.moviesByGenre3(id).subscribe(genres3 =>{
        this.genres3 = genres3;
      });
    });
  }

}
