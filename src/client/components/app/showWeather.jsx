import React, { Component } from 'react';
import Type from 'prop-types';
import {ButtonToolbar, Button, Table} from 'react-bootstrap'
import sunny from './images/sunny.png'
import cloudy from './images/cloudy.png'
import rainy from './images/rainy.png'
import rainysnow from './images/rainysnow.png'
import snow from './images/snow.png'

export default class DayWeather extends Component {
    constructor(props, context) {
        super(props, context);
    
        // this.handleShow = this.handleShow.bind(this);
        // this.handleClose = this.handleClose.bind(this);
    
        // this.state = {};
      }

    render() {
        return(
            <div className="dayInfo">
                <h2>{ Object.keys(this.props.day)[0] }</h2>
               <Table responsive>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>00: 00</th>
                            <th>03: 00</th>
                            <th>06: 00</th>
                            <th>09: 00</th>
                            <th>12: 00</th>
                            <th>15: 00</th>
                            <th>18: 00</th>
                            <th>21: 00</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Temperature</td>
                            <td>{ this.props.day[Object.keys(this.props.day)[0]][0] }</td>
                            <td>{ this.props.day[Object.keys(this.props.day)[0]][1] }</td>
                            <td>{ this.props.day[Object.keys(this.props.day)[0]][2] }</td>
                            <td>{ this.props.day[Object.keys(this.props.day)[0]][3] }</td>
                            <td>{ this.props.day[Object.keys(this.props.day)[0]][4] }</td>
                            <td>{ this.props.day[Object.keys(this.props.day)[0]][5] }</td>
                            <td>{ this.props.day[Object.keys(this.props.day)[0]][6] }</td>
                            <td>{ this.props.day[Object.keys(this.props.day)[0]][7] }</td>
                        </tr>
                    </tbody>
                </Table>;
            </div>
        )
    }
}