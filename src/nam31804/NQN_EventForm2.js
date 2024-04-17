import React from 'react'

export default function NQN_EnventForm2() {
    // dinh nghia cac ham xu ly su kien
    const eventHandleClick1 = (content)=>{
        console.log('==================================');
        console.log(content);
        console.log('==================================');
    }
  return (
    <div className='alert alert-success'>
        <h2>Event Demo - Funciton Component</h2>
            <button onClick={eventHandleClick1("Nguyễn Quang Nam")}>Goi khi render</button>
            <button onClick={eventHandleClick1("CNTT2-ReactJs")}>Goi khi click</button>
    </div>
  )
}