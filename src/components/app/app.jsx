import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Movie from '../movie/movie';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';

const App = (props) => {
  const {moviesCount, title, genre, releaseYear} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main
            moviesCount={moviesCount}
            title={title}
            genre={genre}
            releaseYear={releaseYear}
          />
        </Route>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/mylist" exact>
          <MyList />
        </Route>
        <Route path="/films/:id" exact>
          <Movie />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview />
        </Route>
        <Route path="/player/:id" exact>
          <Player />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  moviesCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired
};

export default App;
