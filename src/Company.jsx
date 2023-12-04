import React from 'react'

function Company({empStatus}) {
  return (
    <div>
        <h1>Company</h1> 
        <h3>Employee status: {empStatus}</h3>
    </div>
  )
}

export default Company