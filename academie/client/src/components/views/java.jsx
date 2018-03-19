import React from "react";

export default class Java extends React.Component {
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/receiver');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  
  render() {
    return (
      <div>
        <div className='page'>
          <h1>Tutoriels extérieurs</h1>
          <ul>
            <li><a href="https://openclassrooms.com/courses/apprenez-a-programmer-en-java">OpenClassrooms: Java</a></li>
            <li><a href="https://www.tutorialspoint.com/java/index.htm">Tutorials Point: Java</a></li>
            <li><a href="https://www.javatpoint.com/java-tutorial">Java T Point: Java</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
