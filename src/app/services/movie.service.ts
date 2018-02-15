import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { DatePipe } from '@angular/common';


import 'rxjs/Rx';


@Injectable()

export class MovieService{

	key:string;
	apikey: string;
	aznKey: string;
	secretKey: string;


   
	constructor(private _jsonp: Jsonp){

		this.apikey='';
		//this.key = 'vtbsj472sc28rm5vb3agzs9n';
		console.log('movieService Initalized..');


	}
	/*

	findZip(searchZip: string){

		return this._jsonp.get('http://data.tmsapi.com/v1.1/movies/showings?jsonp=JSONP_CALLBACK&startDate=2017-10-21&zip='+searchZip+'&radius=10&imageSize=Md&imageText=true&api_key='+this.key)
		.map(res => res.json());

	}
	

	movieShowings(id: string,searchZip: string){

		return this._jsonp.get('http://data.tmsapi.com/v1.1/movies/'+id+'/showings?jsonp=JSONP_CALLBACK&startDate=2017-09-30&zip='+searchZip+'&radius=10&imageSize=Lg&imageText=true&api_key='+this.key)
		.map(res => res.json());

	}
*/

	getPopular(){

		return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey+'&region=US&page=1')
		.map(res => res.json());

	}



	getReviews(id:string){

		return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'/reviews?callback=JSONP_CALLBACK&api_key='+this.apikey+'&language=en-US&page=1')
		.map(res => res.json());

	}
	

	getGenre(){

        return this._jsonp.get('https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK&api_key=af57a2cf0f9c05106c9da8a49fdbcb44&language=en-US')
		.map(res => res.json());
	}



	moviesByGenre(id: string){

		 return this._jsonp.get('https://api.themoviedb.org/3/genre/'+id+'/movies?callback=JSONP_CALLBACK&api_key=af57a2cf0f9c05106c9da8a49fdbcb44&language=en-US&include_adult=false&sort_by=created_at.asc')
		.map(res => res.json());

	}



	moviesByGenre2(id: string){

		 return this._jsonp.get('https://api.themoviedb.org/3/genre/'+id+'/movies?callback=JSONP_CALLBACK&api_key=af57a2cf0f9c05106c9da8a49fdbcb44&language=en-US&include_adult=false&sort_by=created_at.asc&page=2')
		.map(res => res.json());

	}



	moviesByGenre3(id: string){

		 return this._jsonp.get('https://api.themoviedb.org/3/genre/'+id+'/movies?callback=JSONP_CALLBACK&api_key=af57a2cf0f9c05106c9da8a49fdbcb44&language=en-US&include_adult=false&sort_by=created_at.asc&page=3')
		.map(res => res.json());

	}



	getInTheaters(){

		return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2018-01-01&primary_release_date.lte=2018-01-31&api_key='+this.apikey+'&region=US')
		.map(res => res.json());
	}

	

	searchMovies(searchStr: string){

		return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey)
		.map(res => res.json());

	}



	getProducts(){
		return this._jsonp.get('http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAJADJERYW3MNQRFWA&AssociateTag=moasis1000-20&Keywords=parts&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2COffers&SearchIndex=Automotive&Service=AWSECommerceService&Timestamp=2017-11-21T01%3A11%3A58.000Z&Signature=Qn1gLuSDAQ%2BnPPRMDLGv%2BWl1CMHCaIdJJJRZ8eROaNg%3D')
		.map(res => res.json());
	}


	

	getMovie(id: string){

		return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey)
		.map(res => res.json());

	}



	getCast(id: string){

		return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'/credits?callback=JSONP_CALLBACK&api_key='+this.apikey)
		.map(res => res.json());

	}



	similarMovies(id: string){

		return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'/similar?callback=JSONP_CALLBACK&api_key='+this.apikey)
		.map(res => res.json());

	}

	

	getTrailer(id: string){

		return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'/videos?callback=JSONP_CALLBACK&api_key='+this.apikey+'&language=en-US')
		.map(res => res.json());

	}


}
