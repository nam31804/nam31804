import React, { Component } from 'react'

export default class NQN_EventForm1 extends Component {
    // ham xu ly su kien //
    eventHandleClick1 = ()=>{
        alert("event handle 1");
    }
    eventHandleClick2(){
        alert("Event Click 2");
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Event handle</h2>
        {/* goi ham xu ly su kien khi renger*/}
        <button onClick={this.eventHandleClick1}>Click 1</button>
        {/* goi ham xu ly su kien khi click*/}
        <button onClick={this.eventHandleClick2}>Click 2</button>
      </div>
    );
  }
}