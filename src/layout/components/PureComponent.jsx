import React from 'react';

class App extends React.PureComponent {
  render() {
    const { component: Component } = this.props;
    return <Component />;
  }
}

export default App;
