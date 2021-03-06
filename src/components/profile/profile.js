import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

const Profile = ({ classes, profile, profileTitle }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.profileTitleText}>{profileTitle}</Typography>
      <Typography className={classes.profileText}>{profile}</Typography>
    </div>
  );
};

const mapsStateToProps = state => {
  return {
    profile: state.profile,
    profileTitle: state.profileTitle
  };
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  profile: PropTypes.string.isRequired,
  profileTitle: PropTypes.string.isRequired
};

export default connect(mapsStateToProps)(Profile);
