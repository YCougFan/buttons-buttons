import React, { Component, Fragment } from 'react';

import ReactstrapBasicButtons from './Components/Reactstrap/ReactstrapBasicButtons';
import ReactstrapOutlineButtons from './Components/Reactstrap/ReactstrapOutlineButtons';
import ReactstrapButtonSizes from './Components/Reactstrap/ReactstrapButtonSizes';
import ReactstrapButtonstate from './Components/Reactstrap/ReactstrapButtonstate';
import ReactstrapCheckedRadio from './Components/Reactstrap/ReactstrapCheckedRadio';
import ReactstrapDropdown from './Components/Reactstrap/ReactstrapDropdown';

export default class extends Component {
  render() {
    return (
      <Fragment>
          <br/>
          <ReactstrapBasicButtons /><br/>
          <ReactstrapOutlineButtons /><br/>
          <ReactstrapButtonSizes /><br/>
          <ReactstrapDropdown /><br/><br/>
          <ReactstrapButtonstate /><br/>
          <ReactstrapCheckedRadio /><br/>
      </Fragment>
     )
   }
}