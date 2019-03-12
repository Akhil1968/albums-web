import React from 'react';

import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';

import reducers from './reducers';

import AlbumList from './components/AlbumList';
import Counter from './components/Counter';

export default class App extends React.Component {
  /* !!!!IMPORTANT!!!! store creation should be outside the render() method */
  store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  render() {
    return (
      <Provider store={this.store}>
        <div style={{ flex: 1 }}>
          <AlbumList />
          <Counter />
        </div>
      </Provider>
    );
  }
}
