import React from 'react'
import { _success, _info, _warning, _error } from 'react-color-log';


function Age(props) {
  _warning("Age compo. rendering");
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

export default React.memo(Age)