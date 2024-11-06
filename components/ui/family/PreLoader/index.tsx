import React from 'react';

class PreLoader extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <div id="preloader">
        <div className="preloader pulse">
          <i className="fa fa-heartbeat" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default PreLoader;
