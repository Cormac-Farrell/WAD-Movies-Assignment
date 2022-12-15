import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import {Link} from 'react-router-dom';
import { Home } from "@mui/icons-material";
import UpcomingPage from './pages/upcomingMoviesPage';
import { QueryClientProvider, QueryClient } from "react-query";
import MoviesContextProvider from "./contexts/moviesContext";
import { ReactQueryDevtools } from 'react-query/devtools';
import AddMovieReviewPage from './pages/addMovieReviewPage';
////
import PopularMoviePage from './pages/popularMoviePage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
      <Routes>
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/movies/upcoming" element={ <UpcomingPage /> } />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/movies/popular" element={<PopularMoviePage />} />
      </Routes>
      </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);