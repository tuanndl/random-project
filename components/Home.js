import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { RandomNumber } from "./random";

// import ActionCreator from "../redux/actionCreators";

export class HomeScreen extends Component {
  render() {
    return (
      <Fragment>
        <RandomNumber />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  translate: state.translate,
});

// const mapDispatchToProps = dispatch => ({
//   translRequest: (lang, mode) => dispatch(ActionCreator.translationRequest(lang, mode)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
export default connect(mapStateToProps)(HomeScreen);
// export default HomeScreen;
