import React from "react";

import '../styles/helpers.css';

export default class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }
  }

  handleChange(type, event) {
    this.setState({
      [type]: event.target.value
    });
  }

  contact() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost/backend/databaseManager.php", true);
    
    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert('Message envoyé !');
        window.location.href = '/';
      }
    });
    
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("message="+this.state.message+"&intent=contactdev"); // La requête est prête, on envoie tout !
  }

  render() {
    const handleChange = this.handleChange.bind(this);
    const contact = this.contact.bind(this);
    return (
      <div className="contact">
        <h1>Contacter Marc Brun, développeur du site :</h1>

        <label>Message</label>
        <textarea cols='35' rows='5' value={this.state.message} onChange={e => handleChange('message', e)} />
        <button
          onClick={contact}
        >
          Contact me!
        </button>
      </div>
    );
  }
}