import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, ChamNgon } from '../components';
import ActionCreator from '../redux/actionCreators';

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
        <ChamNgon />
      </Layout>
    );
  }
}

export default connect()(Index);
