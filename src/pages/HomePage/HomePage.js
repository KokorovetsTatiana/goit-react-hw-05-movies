import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import moviesApi from "../../services/api";

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    moviesApi
      .fetchTrendingMovies()
      .then(({ data }) => this.setState({ movies: data.results }));
  }

  render() {
    const { location } = this.props;

    return (
      <Container>
        <h2>Trending today</h2>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${this.props.match.url}movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
                {movie.original_name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default HomePage;
