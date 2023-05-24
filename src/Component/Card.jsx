import React from 'react'

export default function Card(props) {
    
  return (
    <div className='cardss'>
    <img src={props.pro_data.image} alt="" />
    <h6> {props.pro_data.title} </h6>
    </div>
  )
}
