import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ActionCreator from '../redux/actionCreators';

import { Home, Layout } from '../components';

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
      <Layout>
        <Home />
      </Layout>
    );
  }
}

export default connect()(Index);
