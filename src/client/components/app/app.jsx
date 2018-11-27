import React, { Component } from 'react';
import Type from 'prop-types';
import {ButtonToolbar, Button} from 'react-bootstrap'
import './app.css'
import sunny from './images/sunny.png'
import cloudy from './images/cloudy.png'
import rainy from './images/rainy.png'
import rainysnow from './images/rainysnow.png'
import snow from './images/snow.png'
import DayWeather from './showWeather'

export default class App extends Component {
  static propTypes = {
    appName: Type.string
  };

  static defaultProps = {
    appName: 'Default App Name'
  };

  constructor(props) {
    super(props)
    this.days = [{day: {Mo: ['0', '+2', '+4', '+6', '+11', '+10', '+12', '+14']}}, 
    {day: {Tu: ['0', '+6', '+34', '+6', '+8', '+10', '-776', '+1']}}, 
    {day: {We: ['5', '+5', '+4', '+6', '+8', '+45', '+12', '+232']}}, 
    {day: {Th: ['-4', '+32', '-273', '+23', '+2', '+10', '+76', '+14']}}, 
    {day: {Fr: ['-78', '+2', '+4', '+6', '+8', '+10', '+765', '+14']}}]
    this.state = {day: {test: []}}
  }

  componentDidMount() {
    let dayInfo = document.getElementsByClassName('dayInfo')[0];
    let button = document.getElementsByClassName('day')
    for(let i = 0; i < button.length; i++) {
      button[i].addEventListener('click', () => {
        dayInfo.style.display = 'block';
        this.setState(this.days[i])
      }) 
    }
  }

  render() {
    const { appName } = this.props;
    return (
      <div>
        <div className='week'> 
          <ButtonToolbar>
            <Button className='day'>
              <p className='dayName'>
              Пн
              </p>
              <img src={ sunny } alt=""/>
              <p>
                -40° -76°
              </p>
            </Button>    
            <Button className='day'>
              <p className='dayName'>
              Вт
              </p>
              <img src={ cloudy } alt=""/>
              <p>
                +2° +12°
              </p>
            </Button>   
            <Button className='day'>
              <p className='dayName'>
              Ср
              </p>
              <img src={ rainy } alt=""/>
              <p>
                -0° +0° 
              </p>
            </Button>   
            <Button className='day'>
              <p className='dayName'>
              Чт
              </p>
              <img src={ rainysnow } alt=""/>
              <p>
                +30° +40°
              </p>
            </Button>   
            <Button className='day'>
              <p className='dayName'>
              Пт
              </p>
              <img src={ snow } alt=""/>
              <p>
                +70° +76°
              </p>
            </Button>
          </ButtonToolbar> 
          <DayWeather {...this.state }/>
        </div>
      </div>

    );
  }
}
