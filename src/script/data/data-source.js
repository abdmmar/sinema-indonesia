class DataSource{
    static async searchMovies(keyword){
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=7d7f3f038e7c1021e4e6f70e7aaacd4c&with_original_language=id&region=id&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
        .catch((error) => {
            console.log(error);
          });
    }

    static async popularMovies(sort = `popularity.desc`){
        return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7d7f3f038e7c1021e4e6f70e7aaacd4c&sort_by=${sort}&page=1&with_original_language=id`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
        .catch((error) => {
            console.log(error);
          });
    }
}

export default DataSource;