import React from 'react'

export default function ActorCard({ firstName, lastName, nameOfCard, actorPictureSrc }) {
  return (
    <div>
      <div><img src={actorPictureSrc} alt="" /></div>
      <div className='flex'>
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <div>{nameOfCard}</div>
    </div>
  )
}
