import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
