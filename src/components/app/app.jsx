import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";

const App = (props) => {
  const {moviesCount, title, genre, releaseYear} = props;
  return (
    <Main
      moviesCount={moviesCount}
      title={title}
      genre={genre}
      releaseYear={releaseYear}
    />

  );
};

App.propTypes = {
  moviesCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired
};

export default App;
