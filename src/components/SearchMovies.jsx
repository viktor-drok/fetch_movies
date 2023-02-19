import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink, Outlet } from "react-router-dom";

const BASE_SEARCH_URL = "https://api.themoviedb.org/3/search/multi";
const API_KEY = "bfdccbc25c964210432d186c297791bf";

const SearchMovies = () => {
	const [movies, setMovies] = useState();
	const [movieTitle, setMovieTitle] = useState("");
	const [query, setQuery] = useState("");

	const henddleSubmit = e => {
		e.preventDefault();
	};

	const henddleChange = e => {
		setMovieTitle(e.target.value);
	};

	const henddleClick = () => {
		setQuery(movieTitle);
	};

	useEffect(() => {
		axios
			.get(`${BASE_SEARCH_URL}?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`)
			.then(response => setMovies(response.data.results));
	}, [query]);

	console.log("qwe", movies);

	return (
		<>
			<form onSubmit={henddleSubmit}>
				<label>
					Search
					<input type="text" value={movieTitle} onChange={henddleChange} />
					<Button variant="primary" onClick={henddleClick}>
						Search
					</Button>
					<ul style={{ display: "flex", flexWrap: "wrap" }}>
						{movies &&
							movies.map(movie => (
								<NavLink to={`${movie.id}`} key={movie.id}>
									<Card style={{ width: "18rem" }}>
										<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
										<Card.Body>
											<Card.Title>{movie.title ? movie.title : movie.original_name}</Card.Title>
											<Button variant="primary">Watch Video</Button>
										</Card.Body>
									</Card>
								</NavLink>
							))}
					</ul>
				</label>
			</form>
		</>
	);
};

export default SearchMovies;
