const getPopularMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=bfdccbc25c964210432d186c297791bf&language=en-US&page=1");

    const json = await response.json();

    const data = await json.results;

    return data;


    // return axios
    //     .get("https://api.themoviedb.org/3/movie/popular?api_key=bfdccbc25c964210432d186c297791bf&language=en-US&page=1")
    //     .then(response => response.data.results)
    //     .then(response => console.log('dsdsd', response.data.results));
};

export default getPopularMovies;