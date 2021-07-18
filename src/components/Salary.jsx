import React from 'react'

export default (props) => {
  console.log("Salary compo. rendering");
  return (
    <div>
      <button
       onClick={()=> props.incrementSalary()}
      >
        Increment salary
      </button>
    </div>
  )
}
