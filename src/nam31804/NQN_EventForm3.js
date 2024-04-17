import React, { Component } from 'react'
// xu ly su kien voi props, state
export default class NQN_EventForm3 extends Component {
    constructor(props){
        super(props);
        // tao doi tuong thong du lieu state
        this.state = {
            name:"Nguyễn Quang Nam",
            job:"Dev soft"
        }
    }
    // ham xu ly su kien
    handleChangeName = (ev)=>{
        this.setState({
            name:"K22CNT2-ReactJs"
        })
    }
    handleChangeJob = ()=>{
        this.setState({
            job:"Công Nghệ Thông Tin"
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>Thay doi du lieu trong state</h2>
        <p>Du lieu:{this.state.name}-{this.state.job}</p>
        <button onClick={this.handleChangeName}>thay doi name</button>
        <button onClick={this.handleChangeJob}>thay doi job</button>
      </div>
    )
  }
}
