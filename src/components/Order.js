import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Order.module.css';

const Order = ({order, showDescription}) => {
  const orderDate = order ? new Date(order.product.orderDate) : '';
  const statusClassList = [
    { status: 'Returnted', class: 'returned'},
    { status: 'In Transit', class: 'transit'},
    { status: 'Completed', class: 'completed'},
  ];
  let statusClass = styles['status-text'];
  if(order) {
    const status = statusClassList.find((item) => item.status === order.product.orderStatus );
    statusClass = status.class;
  }
  return(
    order ?     
      <Link to={`/orders/${order.id}`} className={styles.order} style={showDescription ? {pointerEvents: "none"} : null}>
        <div>
          <section className={styles['product-pic']}>
            <img src={order.product.picture} alt='Product' />
          </section>
          <section className={styles.name}>
            <span>{order.product.name}</span>
          </section>
          <div className={styles.orderedon}><span className={styles['ordered-on-label']}>Ordered on </span>{orderDate.toDateString()}</div>
          <section className={styles.status}>
            <div>
              <span className={`${styles['status-text']} ${styles[statusClass]}`}>
                {order.product.orderStatus}
              </span>
            </div>
          </section>
            <section className={styles.price}>
              <span>
                {order.price}
              </span>
            </section>  
          {showDescription ? '' :
            <div className={styles.chevron}>
              <i className="fa fa-chevron-right" aria-hidden="true"></i> 
            </div>      
          }
        </div>
        { showDescription ? <div className={styles.description}><h3>Description</h3>{order.product.description}</div> : null }
      </Link>    
      : ''
  )
}

export default Order;