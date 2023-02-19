import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import PopularMovies from "./components/PopularMovies";
import SearchMovies from "./components/SearchMovies";
import TopRated from "./components/TopRated";
import TvShows from "./components/TvShows";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <div>Home Page</div> } />
          <Route path="popular" element={ <PopularMovies /> } />
          <Route path="toprated" element={ <TopRated /> } />
          <Route path="tvshows" element={ <TvShows /> } />
          <Route path="search" element={ <SearchMovies /> } />
          <Route path="search/:movieId" element={ <MovieCard /> } />
          <Route path="*" element={ <div>Not Found</div> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
