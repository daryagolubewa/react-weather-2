import React, { Component } from 'react';
import Type from 'prop-types';
import {ButtonToolbar, Button} from 'react-bootstrap'
import './app.css'
import sunny from './images/sunny.png'
import cloudy from './images/cloudy.png'
import rainy from './images/rainy.png'
import rainysnow from './images/rainysnow.png'
import snow from './images/snow.png'

export default class App extends Component {
  static propTypes = {
    appName: Type.string
  };

  static defaultProps = {
    appName: 'Default App Name'
  };

  componentDidMount() {
    const fetchFunc = async () => {
      const res = await fetch('/api/test');
      console.log(res);
      return res;
    };
    fetchFunc();
  }

  render() {
    const { appName } = this.props;
    return (
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
      </div>
    );
  }
}
