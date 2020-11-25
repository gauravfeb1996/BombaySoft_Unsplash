import './App.css';

import { store } from './store/store';
import { Provider } from 'react-redux';
import Main from './Screens/Main/Main';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <Main />
      </Provider>
    </Router>
  );
}

export default App;
