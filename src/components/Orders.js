import React, { Component } from 'react';
import Order from './Order';
import Loading from './Loading';
import styles from './Orders.module.css';

class Orders extends Component {
  state = {
    term: ''
  }

  search = (event) => {
    const term = event.target.value;
    this.setState({ term: term });
    this.props.handleSearch(term);
  }

  render() {
    const orders = this.props.orders;
    return (
      <div>
        <div className={styles['search-container']}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input className={styles['search-box']} type="text" value={this.state.term} onChange={this.search} placeholder="Search by Product Name/Description or Order status" />
        </div>
        {orders ? 
          orders.map((order) => 
            <Order key={order.id} order={order}/>
          ) 
          : 
          <Loading />
        }
      </div>
    )
  }
}

export default Orders;