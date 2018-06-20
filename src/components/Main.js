require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import TableComponent from './home/TableComponent.js';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <TableComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
