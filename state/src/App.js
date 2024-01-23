



import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      person: {
        fullName: 'Ozah Blessing',
        bio: 'A junior front- end dev. about to explore ',
       imgSrc: "https://images.pexels.com/photos/6808143/pexels-photo-6808143.jpeg?auto=compress&cs=tinysrgb&w=400",   
        profession: 'Front-End Developer'
      },
      shows: true,
      timeInterval: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval (() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState)  => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;

    const cardStyle = {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth:  '300px'
    }

    const btnStyle = {
      border: 'none',
      borderRadius: '8px',
      padding: '8px 15px',
      backgroundColor: 'red',
      color: '#fff',
      cursor: 'pointer'
    }

    return (
      <div style={cardStyle}>
        <h2>Name: {person.fullName}</h2>
        <p style={{ fontWeight: 'bold', fontSize: '20px'}}>Bio: <span style={{ fontWeight: 'lighter', fontSize: '18px'}}>{person.bio}</span></p>
        <img src={person.imgSrc} style={{ borderRadius: '8px' }} alt="Person"/>
        <h3>Profession: {person.profession}</h3>
        <p>{shows ? 'Currently showimg' : 'Currently not showing'}</p>
        <button onClick={this.toggleShow} style= {btnStyle}>Profile</button>
        <p>Time Interval since mount: {timeInterval} seconds</p>
      </div>
    )
  }
}

export default App;
