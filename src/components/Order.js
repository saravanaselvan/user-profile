import React from 'react';
import styles from './Order.module.css';

const Order = ({order}) => {
  const orderDate = order ? new Date(order.product.orderDate) : '';
  const statusClassList = [
    { status: 'Returnted', class: 'returned'},
    { status: 'In Transit', class: 'transit'},
    { status: 'Completed', class: 'completed'},
  ];
  let statusClass = styles.status;
  if(order) {
    const status = statusClassList.find((item) => item.status === order.product.orderStatus );
    statusClass = `${statusClass} ${status.class}`;
  }
  return(
    order ?     
      <div className={styles.order}>
        <section>
          <img src={order.product.picture} alt='Product' />
        </section>
        <section className={styles.name}>
          <span>{order.product.name}</span>
        </section>
        <div className={styles.orderedon}><span className={styles['ordered-on-label']}>Ordered on </span>{orderDate.toDateString()}</div>
        <section className={statusClass}>
          {/* <div className={styles.description}>{order.product.description}</div> */}
          <div>
            <span className={styles['status-text']}>
              {order.product.orderStatus}
            </span>
          </div>
        </section>
        <section>{order.price}</section>        
      </div>    
      : ''
  )
}

export default Order;