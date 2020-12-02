import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";


const withControlPlayer = (Component) => {
  class WithControlPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.videoRef = createRef();
      this.onFullScreenClickHandle = this.onFullScreenClickHandle.bind(this);
      this.onPlayClickHandle = this.onPlayClickHandle.bind(this);

      this.state = {
        isLoading: true,
        isPlaying: false,
        duration: 0,
        progress: 0,
      };
    }

    onPlayClickHandle() {
      const {isPlaying} = this.state;
      this.setState({isPlaying: !isPlaying});
    }

    onFullScreenClickHandle() {
      const video = this.videoRef.current;
      video.requestFullscreen();
    }


    componentDidMount() {
      const {film} = this.props;
      const {videoLink} = film;
      const video = this.videoRef.current;

      video.src = videoLink;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
        duration: Math.floor(video.duration),
      });

      video.ontimeupdate = () => {
        this.setState({
          progress: Math.floor(video.currentTime),
        });
      };
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

      video.oncanplaythrough = null;
      video.ontimeupdate = null;
      video.src = null;

    }

    render() {
      const {isLoading,
        isPlaying,
        duration,
        progress} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          onFullScreenClick={this.onFullScreenClickHandle}
          onPlayClick={this.onPlayClickHandle}
          isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          renderPlayer={(poster, className) => {
            return (
              <video
                poster={poster}
                className={className}
                ref={this.videoRef}
              />
            );
          }}
        />
      );
    }

    componentDidUpdate() {
      const video = this.videoRef.current;
      const {isPlaying} = this.state;

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }

    }
  }

  WithControlPlayer.propTypes = {
    film: PropTypes.shape({
      videoLink: PropTypes.string.isRequired,
    }).isRequired,
  };

  return WithControlPlayer;
};

export default withControlPlayer;
