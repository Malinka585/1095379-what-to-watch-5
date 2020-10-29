import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";


export default class VideoPlayer extends PureComponent {
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
      <video
        ref={this.videoRef}
        disabled={isLoading}
      >
      </video>
    );
  }

  componentDidUpdate() {
    const video = this.videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  heigth: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
};
