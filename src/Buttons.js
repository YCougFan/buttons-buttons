import React, { Component, Fragment } from 'react';

import ReactstrapBasicButtons from './ReactstrapBasicButtons';
import ReactstrapOutlineButtons from './ReactstrapOutlineButtons';

export default class extends Component {
  render() {
    return (
      <Fragment>
          <br/>
          <ReactstrapBasicButtons /><br/>
          <ReactstrapOutlineButtons />
      </Fragment>
     )
   }
}