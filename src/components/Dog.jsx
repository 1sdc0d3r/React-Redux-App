import React from "react";
import { connect } from "react-redux";

// import { FetchApi } from "../actions/FetchAPI";

const Dog = props => {
  return (
    <div>
      <img src={props.imgUrl} alt="pic of dog" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    imgUrl: state.imgUrl
  };
};

export default connect(mapStateToProps)(Dog);
