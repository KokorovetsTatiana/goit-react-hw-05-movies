import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "../Container/Container";
import movieApi from "../../services/api";

class ReviewsComponent extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    movieApi.fetchMovieReviews(movieId).then(({ results }) => {
      this.setState({ reviews: [...results] });
    });
  }
  render() {
    const { reviews } = this.state;

    return (
      <Container>
        <ul>
          {reviews.length ? (
            reviews.map((review) => (
              <li key={review.id}>
                <h3>Author {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))
          ) : (
            <h4>This movie has no reviews yes</h4>
          )}
        </ul>
      </Container>
    );
  }
}

ReviewsComponent.propTypes = {
  movieId: PropTypes.string,
};

export default ReviewsComponent;
