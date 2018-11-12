import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from "./queries";

const Detail = ({
  match: {
    params: { movieId }
  }
}) => (
  <Query query={MOVIE_DETAILS} variables={{ movieId: parseInt(movieId) }}>
    {({ loading, error, data }) => {
      if (loading) return <span>loading</span>
      if (error) return <span>something happened</span>
      return (
        <React.Fragment>
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