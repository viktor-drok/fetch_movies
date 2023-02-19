import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../index.css";
// import getPopularMovies from "./fetchData/fetchData";

function PopularMovies() {
	const [movies, setMovies] = useState([]);

	// overview;

	useEffect(() => {
		// getPopularMovies().then(as => setMovies(as)),
		axios
			.get("https://api.themoviedb.org/3/movie/popular?api_key=bfdccbc25c964210432d186c297791bf&language=en-US&page=1")
			.then(response => setMovies(response.data.results));
	}, []);

	console.log(movies);

	return (
		<Carousel interval={null}>
			{movies.map(movie => (
				<Carousel.Item key={movie.id} className="carusel">
					<img className="image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="First slide" />
					<Carousel.Caption>
						<h3>{movie.title}</h3>
						<p>{movie.overview}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
}

export default PopularMovies;
