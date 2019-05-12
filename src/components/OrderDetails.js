import React from 'react';
import Order from './Order';
import Loading from './Loading';

const OrderDetails = ({ orders, match }) => {
  const order = orders ? orders.find((item) => item.id === match.params.id) : '';
  return (
    <div>
      { orders ? 
        <Order order={order} showDescription='true' />
        : <Loading />
      }
    </div>
  )
}

export default OrderDetails;