import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Orders from './components/Orders';

import styles from './App.module.css';

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    fetch('https://40vk5u4d93.execute-api.ap-southeast-1.amazonaws.com/stage')
      .then(res => res.json() )
      .then((result) => {
        this.setState({ user: JSON.parse(result.body) });
      });
  }

  render() {
    const user = this.state.user ? this.state.user : null;
    return (
      <Router>
        <div className={styles.container}>
          <Route exact path="/" render={() => <Profile user={user}/>} />
          <Route path="/orders" render={() => <Orders orders={user ? user.orders : null} /> } />
        </div>
      </Router>
    );
  }
}

export default App;
