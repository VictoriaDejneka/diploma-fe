import React from 'react';
import styles from './Header.module.css';
import axios from 'axios';

export default class Header extends React.Component {

   state = {
        users: []
   }

  render() {
    return (
      <nav>
        <ul>
            {this.state.users.map(user => <li key={user.id} className={styles.item}>{user.user_name}</li>)}
        </ul>
      </nav>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:8080/users').then(res => {
        this.setState({
            users: res.data
        })
    })
  }
}
