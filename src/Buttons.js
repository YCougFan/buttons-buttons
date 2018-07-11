import React, { Component, Fragment } from 'react';

import ReactstrapBasicButtons from './ReactstrapBasicButtons';
import ReactstrapOutlineButtons from './ReactstrapOutlineButtons';
import ReactButtonSizes from './ReactButtonSizes';

export default class extends Component {
  render() {
    return (
      <Fragment>
          <br/>
          <ReactstrapBasicButtons /><br/>
          <ReactstrapOutlineButtons /><br/>
          <ReactButtonSizes />
      </Fragment>
     )
   }
}