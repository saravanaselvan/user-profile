import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Orders from './components/Orders';
import OrderDetails from './components/OrderDetails';

import styles from './App.module.css';

class App extends Component {
  state = {
    user: null,
    orders: []
  };

  componentDidMount() {
    fetch('https://40vk5u4d93.execute-api.ap-southeast-1.amazonaws.com/stage')
      .then(res => res.json() )
      .then((result) => {
        const user = JSON.parse(result.body);
        const orders = user.orders;
        this.setState({ user:  user, orders: orders});
      });
  }

  handleSearch = (term) => {
    let result = this.state.orders.filter((order) => {
      return order.product.name.toLowerCase().includes(term.toLowerCase()) ||
            order.product.description.toLowerCase().includes(term.toLowerCase()) ||
            order.product.orderStatus.toLowerCase().includes(term.toLowerCase());
    });
    if(term === '') {
      result = this.state.user.orders;
    }
    this.setState({ orders: result });
  }

  render() {
    const user = this.state.user ? this.state.user : null;
    const orders = this.state.orders ? this.state.orders : null;
    return (
      <Router>
        <div className={styles.container}>
          <Route exact path="/" render={() => <Profile user={user}/>} />
          <Route exact path="/orders" render={(props) => <Orders handleSearch={this.handleSearch} orders={orders ? orders : null} /> } />
          <Route exact path="/orders/:id" render={(props) => <OrderDetails {...props} orders={orders ? orders : null} /> } />
        </div>
      </Router>
    );
  }
}

export default App;
