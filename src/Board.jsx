import React, { useState } from 'react'

const Board = () => {
    const [boxes,setBoxes] = useState([null,null,null,null,null,null,null,null,null]);
    // console.log(boxes);
    const BOX = boxes.map((box,index)=>(
        <button style={{width:'100px',height:'100px',color:'black',background:'wheat'}} ></button>
    ));
    console.log(BOX)
    return (
        <div style={{boxShadow:'2px 2px 2px black',display:'grid',gridTemplateColumns:'100px 100px 100px', gridTemplateRows:'100px 100px 100px'}} >{BOX}</div>
  )
}

export default Board