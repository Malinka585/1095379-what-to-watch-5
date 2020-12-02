import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";
import {Link} from "react-router-dom";

const UserBlock = (props) => {
  const {authorizationStatus} = props;

  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH ?
        <Link to={`/mylist`}>
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </Link>
        :
        <Link to={`/login`} className="user-block__link">Sign in</Link>}
    </div>
  );
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
