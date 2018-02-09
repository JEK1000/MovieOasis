import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { GenreComponent } from './components/genre/genre.component';

import { AuthGuard } from './authguard';

const appRoutes: Routes = [

	{ path:'',component: MoviesComponent},

	{ path:'movie/:id',component: MovieComponent},
	{ path:'genre/:id',component: GenreComponent},
	//canActivate: [ AuthGuard ]}
	{ path:'**',component: MovieComponent }
	


];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);