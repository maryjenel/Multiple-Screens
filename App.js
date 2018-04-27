import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import Router from "./src/Router";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC_bzvZKJ6M5n1nRnDPU3R_XdEgllJ6DW0",
      authDomain: "multiplescreens-633ca.firebaseapp.com",
      databaseURL: "https://multiplescreens-633ca.firebaseio.com",
      projectId: "multiplescreens-633ca",
      storageBucket: "multiplescreens-633ca.appspot.com",
      messagingSenderId: "578254094716"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
