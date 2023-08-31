# Web App Dev 2 - Assignment 1 - ReactJS app.

Name: Cormac Farrell

## Overview.

Encountered a massive error with my code upon trying to intigrate mongobd into assignment 1
now whenever a user runs npm start they are brought to http://localhost:8080/Cormac-Farrell/WAD-Movies-Assignmen and not the intended site. reverting the code from a previous verson has not fixed this.

Continueing error with Tvseries pages, the api seems to have trouble pulling the images for the tvshows which was causing the page not to load, Other than that all other pages unrelated to tv series are working as intended.

The api appears to be working but will not call the Tvshow images as can be seen here:
https://api.themoviedb.org/3/tv/1/images?api_key=7e287e985b66b4afc080f3d9806d9d5b
https://api.themoviedb.org/3/discover/tv?api_key=7e287e985b66b4afc080f3d9806d9d5b&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0
https://api.themoviedb.org/3/tv/18/images?api_key=7e287e985b66b4afc080f3d9806d9d5b


### New Pages.

-Popular Movies Page
-Top rated Moves Page
-Tv series main page
-Tv series details page
-Tv series review page
-Tv series Favourites page
### New Features.

-Added Tv series and favouriting Tv series (non functional due to an api error with getting the series images)
-Popular and Top Rated Movie tracking 

## Setup requirements.

N/A

## TMDB endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 
/ - Homepage
/reviews/form - Users reviews of a movie.
/movies/favourites - Favourited Movies
/movies/:id - page for a selected movie
/reviews/:id - Page of a selected movies review
/movies/upcoming - Page showing upcoming movies
/movies/popular - Page showing popular movies
/movies/toprated - Page showing top rated movies
//
/tv/:id - page showing a selected tv series
/reviewsTV/form - Users reviews of a selected TV show.
/tv/favourites - User's favourited TV shows.
/reviewsTV/:id - Page of for a specific TV Show review

## App Design.

### Component catalogue.
storybook non functional

### UI Design.
![Popular](https://user-images.githubusercontent.com/74902128/208070622-714f0289-2631-4bb9-95dc-cd852ee33a7c.png)

![toprated](https://user-images.githubusercontent.com/74902128/208070644-f2c2d2a9-4357-4b64-a4b2-1a6b61ce039c.png)

//Tv series encountered an error while trying to fetch the images for the series with the API and i could not remedy this.

### Routing.

[ List the __new routes__ supported by your app and state the associated page.]

/discover/movie - Main movies page
/movie/${id} - Get the details of a specific movie
/genre/movie/list - Get the list of genres for movies
/movie/${id}/reviews - Get the reviews of a selected movie
/movie/${id}/images - Get the poster of a selected movie
/movie/upcoming - Get the upcoming movies
/movie/popular - Get the popular movies
/movie/top_rated - Get the top rated movies
/tvseries/home - Main TV hmoe
/tv/${id} - Get the details of a selected TV Show
/tv/popular - Get the Popular TV Series



[If relevant, state what aspects of your app are protected/private (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

[ Itemize the technologies/techniques you researched independently and adopted in your project, i.e. aspects not covered in the lectures/labs. Mention the source code filenames that illustrate these  (code excerpts are not required) and provide references to the online resources that helped you (articles/blogs).


