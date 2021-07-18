import React from 'react'

export default function Age(props) {
  console.log("Age compo. rendering");
  return (
    <div>
      <button
      onClick={
        ()=>props.incrementAge()
      }>
        Increment Age
      </button>
    </div>
  )
}
