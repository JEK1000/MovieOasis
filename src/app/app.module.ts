import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { MovieComponent } from './components/movie/movie.component';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './authguard';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // angular 4.x and greater
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GenreComponent } from './components/genre/genre.component';




@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    GenreComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    routing,


  ],
  providers: [AuthService, AuthGuard, {provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {


 }

