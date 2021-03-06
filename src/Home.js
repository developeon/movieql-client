import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';
import Movie from './Movie';

const Home = () => <Query query={HOME_PAGE}>{({ loading, data, error }) => {
    if(loading) return "Loading . . .";
    if(error) return "something happened";
    return data.movies.map(movie => (
        <Movie
            id={movie.id}
            key={movie.id}
            title={movie.title}
            rating={movie.rating}    
            summary={movie.summary}
            poster={movie.medium_cover_image}
        />
    ));
}}</Query>;

export default Home;