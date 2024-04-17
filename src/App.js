import React, { Component } from 'react'
import NQN_EventForm1 from './nam31804/NQN_EventForm1'
import NQN_EnventForm2 from './nam31804/NQN_EventForm2'
import NQN_EventForm3 from './nam31804/NQN_EventForm3'
import NQN_EventForm4 from './nam31804/NQN_EventForm4'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h2>Event Form Demo</h2>
        <NQN_EventForm1 />
        <NQN_EnventForm2 />
        <NQN_EventForm3 />
        <NQN_EventForm4 name="Nguyễn Quang Nam"/>
      </div>
    )
  }
}