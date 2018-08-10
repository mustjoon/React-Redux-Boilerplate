import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import styled, { ThemeProvider } from 'styled-components';

const StyledApp = styled.div`
  font-size: 16px;
  color: black;
  font-family: Open sans;
  width: 100%;
  height: 100%;
  text-align: center;
  min-height: 100%;
`;

class App extends Component {

  render() {

    const { theme } = this.props;
    
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Header/>
          {this.props.children}
          <Footer/>
        </StyledApp>
      </ThemeProvider>
    );
  }
}

App.defaultProps = {
  theme: {
    textColor: 'black',
    backgroundColor: 'white'
  }
}

export default App;
