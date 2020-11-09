import React, {PureComponent} from "react";

const withMovieList = (Component) => {
  class WithMovieList extends PureComponent {
    constructor(props) {
      super(props);

      this.onFilmCardOverHandle = this.onFilmCardOverHandle.bind(this);
      this.onFilmCardLeaveHandle = this.onFilmCardLeaveHandle.bind(this);

      this.lastTimeout = null;

      this.state = {
        activeCard: 0,
      };
    }

    onFilmCardOverHandle(id) {
      if (this.lastTimeout) {
        clearTimeout(this.lastTimeout);
      }

      this.lastTimeout = setTimeout(() => {
        this.setState({activeCard: id});
      }, 1000);
    }

    onFilmCardLeaveHandle() {
      this.setState({activeCard: 0});
      clearTimeout(this.lastTimeout);
      this.lastTimeout = null;
    }

    componentWillUnmount() {
      if (this.lastTimeout) {
        clearTimeout(this.lastTimeout);
      }
    }

    render() {
      const {activeCard} = this.state;

      return (
        <Component
          {...this.props}
          activeCard={activeCard}
          onFilmCardOver={this.onFilmCardOverHandle}
          onFilmCardLeave={this.onFilmCardLeaveHandle}
        />
      );
    }
  }

  return WithMovieList;
};

export default withMovieList;
