import React from 'react'
import { _success, _info, _warning, _error } from 'react-color-log';


const Salary =  (props) => {
  _success("Salary compo. rendering");
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

export default React.memo(Salary)