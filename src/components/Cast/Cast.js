import React, { Component } from "react";
import Container from "../Container/Container";
import movieApi from "../../services/api";
import PropTypes from "prop-types";

class CastComponent extends Component {
  state = {
    casts: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    movieApi
      .fetchMovieCast(movieId)
      .then(({ cast }) => {
        if (cast.length !== 0) {
          this.setState({
            casts: [...cast],
          });
        }
      })
      .catch((error) => console.log(error));
  }
  render() {
    const { casts } = this.state;

    return (
      <Container>
        <ul className="cast">
          {casts.length ? (
            casts.map((cast) => (
              <li key={cast.cast_id}>
                {cast.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt="cast img"
                  />
                ) : (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt="cast img"
                  />
                )}
                <h3>{cast.name}</h3>
                <p>Character: {cast.character}</p>
              </li>
            ))
          ) : (
            <h2>No actors to display</h2>
          )}
        </ul>
      </Container>
    );
  }
}

CastComponent.propTypes = {
  movieId: PropTypes.string,
};

export default CastComponent;
