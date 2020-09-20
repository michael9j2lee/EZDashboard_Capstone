import React from 'react';
import {AppContext} from '../App/AppProvider';

export default function (firstVisit) {
    return (
      <AppContext.Consumer>
        {({firstVisit}) =>
          firstVisit ? <div>
            Welcome to EZDashboard!  Please select a color to begin. {' '}
          </div> : null
        }
      </AppContext.Consumer>
    );
  };