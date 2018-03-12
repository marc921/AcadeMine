import React from "react";

import Nav from './nav';
import GoogleMap from './map';
import '../styles/helpers.css';

export default class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      members: []
    }
  }

  componentDidMount() {
    const self = this;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost/backend/map.php", true);
    
    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        if(data.msg === 'Success'){
          self.setState({
            members: data.payload
          });
        }
      }
    });
    
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("intent=getmembers"); // La requête est prête, on envoie tout !
  }

  render() {
    return (
      <div className='inline'>
        <span className='carabinsurfing' onClick={() => {window.location.href = '/';}}>CarabinSurfing</span>
        <Nav />
        <div className='page'>
          <h1>Dashboard</h1>
          <GoogleMap 
            style={{
              width: '60%',
              height: '80%',
              position: 'absolute',
              left: '-30%'
            }}
            members={this.state.members}
          />
        </div>

      </div>
    );
  }
}