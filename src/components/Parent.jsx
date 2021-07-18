import React from 'react'
import Age from './Age'
import  Salary  from './Salary';

export default function ParentComponent() {
  const [age, setAge] = React.useState(0);
  const [salary, setSalary] = React.useState(0);

  /**
   * Code without using useCallback hook
   */
  const incrementAge = () => {
    console.log("incrementAge() called")
    setAge((currentAge)=>currentAge+1)
  }
  const incrementSalary = () => {
    console.log("incrementSalary() called")
    setSalary((currentSalary)=> currentSalary + 1000)
  }
  return (
    <div>
      <h2>Age : <span>{age}</span></h2>
      <h2>Salary : <span>{salary}</span></h2>

      <Age incrementAge={incrementAge}/>
      <Salary incrementSalary={incrementSalary}/>
    </div>
  )
}
