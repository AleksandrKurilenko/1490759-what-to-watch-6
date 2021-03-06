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
import {Urls} from '../../consts';
import {MOVIES_PROP} from '../../utils/validate';


const App = (props) => {
  const {films, promoMovie} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Urls.MAIN} exact>
          <Main
            films={films}
            promoMovie={promoMovie}
          />
        </Route>
        <Route path={Urls.SIGN_IN} exact>
          <SignIn />
        </Route>
        <Route path={Urls.MY_LIST} exact>
          <MyList />
        </Route>
        <Route exact path={Urls.MOVIE} render={({match}) => {
          const id = match.params.id;
          const film = films[id - 1];
          return <Movie
            film={film}
            films={films}
          />;
        }} />
        <Route exact path={Urls.ADD_REVIEW} render={({match}) => {
          const id = match.params.id;
          const film = films[id - 1];
          return <AddReview
            title={film.name}
            poster={film.posterImage}
            backgroundImage={film.backgroundImage}
            id={film.id}
          />;
        }} />
        <Route exact path={Urls.PLAYER} render={({match}) => {
          const id = match.params.id;
          const film = films[id - 1];
          return <Player
            duration={film.runTime}
            title={film.name}
          />;
        }} />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP).isRequired).isRequired,
  promoMovie: PropTypes.shape(MOVIES_PROP).isRequired
};

export default App;
