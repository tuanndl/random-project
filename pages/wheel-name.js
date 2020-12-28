import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import ActionCreator from '../redux/actionCreators';

import { WheelName, Header, Footer, Head } from '../components';

class Index extends Component {
  static async getInitialProps({ ctx }) {
    const { store, isServer } = ctx;

    store.dispatch(ActionCreator.translationRequest('es'));

    return { isServer };
  }

  componentDidMount() {
    const { dispatch, isServer, translate } = this.props;

    if (isServer && !translate) {
      dispatch(ActionCreator.translationRequest('es'));
    }
  }

  render() {
    return (
      <Fragment>
        <Head />

        <Header />

        <WheelName />

        <Footer />
      </Fragment>
    );
  }
}

export default connect()(Index);
