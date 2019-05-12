import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';

class Profile extends Component {
  render() {
    const { name, company, email, address, about, orders, picture } = this.props.user ? this.props.user : {};
    return (
      <div>
        {this.props.user ? 
          <div className={styles.profile}>
            <div className={`${styles['left-grid']} ${styles.card}`}>
              <div className={styles['profile-pic-container']}>
                <img src={picture} alt='Profile'/>
              </div>
              <h2 className={styles.name}>{name.first} {name.last}</h2>
              <h3>
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
                <div>{company}</div>
                <div>{email}</div>
                <div>{address}</div>
              </section>
              <div>
                <h2>About</h2>
                <section>{about}</section>
              </div>
            </div>
          </div> 
          : ''
        }
      </div>
    );
  }
}

export default Profile;