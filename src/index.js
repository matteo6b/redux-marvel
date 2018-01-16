import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Comic from './components/Comic'
import ReactDOM from 'react-dom';
class App extends Component {

  render () {
    return (
      <Provider store={ store }>

          <Comic/>
      </Provider>
    )
  }
}

ReactDOM.render(  <App />,document.getElementById('app'));
