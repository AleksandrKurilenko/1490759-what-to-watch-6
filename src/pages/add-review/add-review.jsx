import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import UserBlock from '../../components/user-block/user-block';


const AddReview = ({title, poster, backgroundImage, id}) => {

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${id}`} className="breadcrumbs__link">{title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
            <UserBlock />
          </header>
          <div className="movie-card__poster movie-card__poster--small">
            <img src={poster} alt={title} width={218} height={327} />
          </div>
        </div>
        <div className="add-review">
          <AddReviewForm
            id={id}
          />
        </div>
      </section>
    </React.Fragment>
  );
};

AddReview.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default AddReview;
