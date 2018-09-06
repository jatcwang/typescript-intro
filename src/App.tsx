import * as React from 'react';
import './App.css';
import {createStore, Store} from 'redux'
import {AllState} from './reducers/Store'
import {allReducers} from './reducers'
import logo from './logo.svg';
import {Provider} from 'react-redux'
import MyContainer from './containers/MyContainer'
import {AllAction} from './actions'

const store: Store<AllState> = createStore<AllState, AllAction, {}, {}>(allReducers)

class App extends React.Component {
  public render() {
    return (
      <Provider store={store} >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <MyContainer passThisIn={ 1 } />
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </Provider>
    )
  }
}

export default App;
