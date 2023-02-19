import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../index.css";

function TopRated() {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [lang, setLang] = useState("en");

	// overview;

	const nextPage = () => {
		setPage(page => page + 1);
	};

	const prevPage = () => {
		setPage(page => page - 1);
	};

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/top_rated?api_key=bfdccbc25c964210432d186c297791bf&language=${lang}&page=${page}`,
			)
			.then(response => setMovies(response.data.results));
	}, [lang, page]);

	console.log(movies);

	return (
		<>
			<button onClick={() => prevPage()}>prev</button>
			<button onClick={() => nextPage()}>next</button>
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
		</>
	);
}

export default TopRated;
