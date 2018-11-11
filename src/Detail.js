import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from "./queries";

const Detail = ({
  match: {
    params: { movieId }
  }
}) => (
  <Query query={MOVIE_DETAILS} variables={{ movieId }}>
    {({ loading, error, data }) => {
      if (loading) return <span>loading</span>
      if (error) return <span>something happened</span>
      return (
        <React.Fragment>
            {data}
        </React.Fragment>
      );
    }}
  </Query>
);

export default Detail;
