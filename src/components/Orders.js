import React from 'react';

const Orders = ({orders}) => {
  return (
    <div>
      {orders ? 
        orders.map((order) => 
          <div key={order.id}>
            {order.product.name}
            {order.product.description}
            <img src={order.product.picture} alt='Product' />
            {order.product.orderDate}
            {order.product.orderStatus}
            {order.price}
          </div>
        ) 
        : 
        ''
      }
    </div>
  )
}

export default Orders;