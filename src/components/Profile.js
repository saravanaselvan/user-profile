import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import styles from './Profile.module.css';

class Profile extends Component {
  render() {
    const { name, phone, email, address, about, orders, picture } = this.props.user ? this.props.user : {};
    return (
      <div>
        {this.props.user ? 
          <div className={styles.profile}>
            <div className={`${styles['left-grid']} ${styles.card}`}>
              <div className={styles['profile-pic-container']}>
                <img src={picture} alt='Profile'/>
              </div>
              <h2 className={styles.name}>{name.first} {name.last}</h2>
              <h3 className={styles['orders-link']}>
                <Link to='/orders'>
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  Orders 
                  <span className={styles.badge}>
                    {orders.length}
                  </span>
                </Link>
              </h3>
            </div>
            <div className={`${styles['right-grid']} ${styles.card}`}>
              <section>
                <h2>Contact</h2>
                <div><i className="fa fa-envelope-o" aria-hidden="true"></i>{email}</div>
                <div><i className="fa fa-phone" aria-hidden="true"></i>{phone}</div>
                <div><i className="fa fa-map-marker" aria-hidden="true"></i>{address}</div>
              </section>
              <div>
                <h2>About</h2>
                <section>{about}</section>
              </div>
            </div>
          </div> 
          : <Loading />
        }
      </div>
    );
  }
}

export default Profile;