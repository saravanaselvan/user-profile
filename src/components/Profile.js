import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    const { name, company, email, address, about, orders, picture } = this.props.user ? this.props.user : {};
    return (
      <div>
        {this.props.user ? 
          <div>
            <div>{name.first}</div>
            <div>{name.last}</div>
            <div>{company}</div>
            <div>{email}</div>
            <div>{address}</div>
            <div>{about}</div>
            <div><Link to='/orders'>{orders.length}</Link></div>
            <img src={picture} alt='Profile'/>
          </div> 
          : ''
        }
      </div>
    );
  }
}

export default Profile;