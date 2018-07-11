import React, { Component, Fragment } from 'react';

import ReactstrapBasicButtons from './ReactstrapBasicButtons';
import ReactstrapOutlineButtons from './ReactstrapOutlineButtons';
import ReactstrapButtonSizes from './ReactstrapButtonSizes';
import ReactstrapButtonstate from './ReactstrapButtonstate';
import ReactstrapCheckedRadio from './ReactstrapCheckedRadio';

export default class extends Component {
  render() {
    return (
      <Fragment>
          <br/>
          <ReactstrapBasicButtons /><br/>
          <ReactstrapOutlineButtons /><br/>
          <ReactstrapButtonSizes /><br/>
          <ReactstrapButtonstate /><br/>
          <ReactstrapCheckedRadio />
      </Fragment>
     )
   }
}