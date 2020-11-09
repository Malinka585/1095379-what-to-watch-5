import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.videoRef = createRef();

      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      const {src, poster, width, heigth, muted} = this.props;
      const video = this.videoRef.current;

      video.src = src;
      video.poster = poster;
      video.width = width;
      video.heigth = heigth;
      video.muted = muted;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

      video.oncanplaythrough = null;
    }

    render() {
      const {isLoading} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
        >
          <video
            ref={this.videoRef}
          />
        </Component>
      );
    }
    componentDidUpdate() {
      const video = this.videoRef.current;

      const {src, poster, width, heigth, muted, isPlaying} = this.props;

      video.src = src;
      video.poster = poster;
      video.width = width;
      video.heigth = heigth;
      video.muted = muted;

      if (isPlaying) {
        video.play();
      } else {
        video.load();
      }
    }

  }

  WithVideo.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    heigth: PropTypes.string.isRequired,
    muted: PropTypes.bool.isRequired,
  };

  return WithVideo;
};

export default withVideo;
