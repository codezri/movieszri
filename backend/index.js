const request = require('request-promise');
const API_KEY = '{API_KEY}';

let handler = async (event) => {
    let body = {};
    let genres = '';
    if(event.requestContext.http.method == "POST")
        genres = JSON.parse(event.body).genres;
    let movies = await fetchMovies(genres);
    if(movies.length > 0) {
        body = movies[rand(0, movies.length - 1)];
    }
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(body),
    };
    return response;
};

let fetchMovies = async (genres) => {
    let response = [];
    let page = rand(1, 10);
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres}&page=${page}`;
    try {
        response = await request({
            url: url,
            json: true
        });
    }
    catch(error) {
        console.error(error);
    }
    return response.results;
}

let rand = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.handler = handler;

// (async () => {
//     console.log(await handler({
//         body: '{"genres": "14"}'
//     }));
//   })();