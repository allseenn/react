import React from 'react'
import PropTypes from 'prop-types'

export default function Student({name, age, isStudent}) {
  return (
    <div>
        <h1>{name}</h1>
        <p>Age: {age}</p> 
        <p>{isStudent ? 'Student' : 'Not a student'}</p>
    </div>
  )
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

