import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list";
import GenreList from "../genre-list/genre-list";
import {connect} from "react-redux";
import ShowMoreButton from "../show-more-button/show-more-button";
import withMovieList from "../../hocs/with-movie-list/with-movie-list";

const MovieListWrapped = withMovieList(MovieList);

const MainScreen = (props) => {
  const {films, onPlayButtonClick, filteredFilmCards, filmsCountToShow} = props;
  const promoFilm = films[0];
  const {filmTitle, filmPoster, filmBackGround, filmGenre, filmDate} = promoFilm;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={filmBackGround} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className ="movie-card__poster">
              <img src={filmPoster} alt={filmTitle} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{filmTitle}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmGenre}</span>
                <span className="movie-card__year">{filmDate}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={onPlayButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList/>

          <MovieListWrapped films={filteredFilmCards.slice(0, filmsCountToShow)} />

          {filteredFilmCards.length > filmsCountToShow && <ShowMoreButton/>}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  filteredFilmCards: state.filteredFilmCards,
  filmsCountToShow: state.filmsCountToShow,
});

MainScreen.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    filmTitle: PropTypes.string.isRequired,
    filmPoster: PropTypes.string.isRequired,
    filmBackGround: PropTypes.string.isRequired,
    filmGenre: PropTypes.string.isRequired,
    filmDate: PropTypes.string.isRequired,
  })).isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  filteredFilmCards: PropTypes.array.isRequired,
  filmsCountToShow: PropTypes.number.isRequired,
};

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
