import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from "./queries";
import { Helmet } from 'react-helmet';

const Detail = ({
  match: {
    params: { movieId }
  }
}) => (
  <Query query={MOVIE_DETAILS} variables={{ movieId: parseInt(movieId) }}>
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <React.Fragment>
            <Helmet>
              <title>Loading | MovieQL</title>
            </Helmet>
            Loading . . .
          </React.Fragment>
        )
      }
      if (error) return "something happened";
      return (
        <React.Fragment>
            <Helmet>
              <title>{data.movie.title} | MovieQL</title>
            </Helmet>
            <p>{data.movie.title}</p>
            <p>{data.movie.rating}</p>
            <p>{data.movie.geners}</p>
            <p>{data.movie.medium_cover_image}</p>
            <p>{data.movie.description_full}</p>
        </React.Fragment>
      );
    }}
  </Query>
);

export default Detail;