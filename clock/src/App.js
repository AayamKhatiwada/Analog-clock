import React from 'react';
import './App.css';


class App extends React.Component {

  // creating a 'state' which declares second, hour and minute
  state = {
    // setting second, hour and minute as 0
    second: 0,
    hour: 0,
    minute: 0
  };

  // componentDidMount checks any update and call the reander
  componentDidMount() {

    // setting the interval of time for each update
    setInterval( ()=> {

      // calling getTime function on each update
      this.getTime();

    },1000 // interval for each update i.e. 1s = 1000
    )
  }

  // getTime function for updating the time
  getTime = () => {
    // new Date() to get the current time and storing it in today
    var today = new Date();

    // taking second value ratio from 'today' and storing it in 'second' 
    let second = today.getSeconds()/60;

    // taking minute value ratio from 'today' and adding it with second
    let minute = (second + today.getMinutes())/60;

    // taking hour value ratio from 'today' and addting it with minute
    let hour = (minute + today.getHours()) / 12;

    // setting the new state in previous state or initial state
    this.setState({ second });
    this.setState({ hour });
    this.setState({ minute });
  };


  render(){
    // restating the second hour minute inside render
    const {second, hour, minute} = this.state;
    return (
      <div className="clock">
      <div className='hand hour' style={{transform:`rotate(${hour*360}deg)`}}></div>
      <div className='hand minute' style={{transform:`rotate(${minute*366}deg)`}}></div>
      <div className='hand second' style={{transform:`rotate(${second*366}deg)`}}></div>
        <div className='number number1'>1</div>
        <div className='number number2'>2</div>
        <div className='number number3'>3</div>
        <div className='number number4'>4</div>
        <div className='number number5'>5</div>
        <div className='number number6'>6</div>
        <div className='number number7'>7</div>
        <div className='number number8'>8</div>
        <div className='number number9'>9</div>
        <div className='number number10'>10</div>
        <div className='number number11'>11</div>
        <div className='number number12'>12</div>

    </div>
    );
  }
}
export default App;