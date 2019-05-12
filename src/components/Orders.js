import React from 'react';
import Order from './Order';

const Orders = ({orders}) => {
  console.log(orders);
  return (
    <div>
      {orders ? 
        orders.map((order) => 
          <Order key={order.id} order={order}/>
        ) 
        : 
        ''
      }
    </div>
  )
}

export default Orders;