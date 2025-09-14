import React from 'react'

const Card = ({title, description}) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {description.map((item, index) =>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Card
