import React from 'react';
import './App.css';
class App extends React.Component {
  state = {
    second: 0,
    hour: 0,
    minute: 0
  };
  componentDidMount() {
    setInterval( ()=> {
      this.getTime();
    },1000
    )
  }
  getTime = () => {
    var today = new Date();

    let second = today.getSeconds()/60;
    let minute = (second + today.getMinutes())/60;
    let hour = (minute + today.getHours()) / 12;

    this.setState({ second });
    this.setState({ hour });
    this.setState({ minute });
  };
  render(){
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