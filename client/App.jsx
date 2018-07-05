import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import theme from './styles/theme';
import './styles/styles.css';

import Container from './components/container/index';
import Header from './components/header';
import Footer from './components/footer';
import MainContent from './components/maincontent/index';
import Transactions from './components/transactions/index';
import Transactioninfo from './components/transactioninfo/index';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Container>
              <Header />
              <MainContent>
                <Route exact path="/" component={Transactions} />
                <Route exact path="/transaction" component={Transactioninfo} />
              </MainContent>
              <Footer />
            </Container>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
