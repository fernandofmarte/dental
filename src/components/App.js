import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

import Header from './Header';
import Landing from './Landing';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <div className='container'>
          <BrowserRouter>
            <Header />
            <Route exact path='/' component={Landing} />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
