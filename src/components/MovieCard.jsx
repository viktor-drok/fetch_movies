import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieCard = () => {
	const { movieId } = useParams();
	const [movieData, setMovieData] = useState({});

	useEffect(() => {
		axios
			.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=bfdccbc25c964210432d186c297791bf&language=en-US`)
			.then(response => setMovieData(response.data));
	}, [movieId]);

	console.log("dfdf", movieData);

	return (
		<div>
			<h2>{movieData?.title}</h2>
			<img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="" />
		</div>
	);
};

export default MovieCard;
