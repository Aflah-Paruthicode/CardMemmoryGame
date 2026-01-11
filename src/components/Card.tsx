import React from 'react'

interface CardInterface {
  card : object,
  onClick : (card : object) => {}
}

const Card = (props : CardInterface) => {
  return (
    <div className={`card ${props.card.isFlipped ? "flipped" : "" } ${props.card.isMatched ? "matched" : "" }`} onClick={() => props.onClick(props.card)} >
      <div className='card-front'> ? </div> 
      <div className='card-back'> {props.card.value} </div>
    </div>
  )
}

export default Card