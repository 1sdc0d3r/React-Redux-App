import React, { useEffect } from "react";
import { connect } from "react-redux";

// import { FetchApi } from "../actions/FetchAPI";

const Dog = props => {
  // useEffect(() => {
  //   // console.log("mounted");
  //   props.FetchApi("https://dog.ceo/api/breeds/image/random");
  // });

  console.log("props", props);
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
