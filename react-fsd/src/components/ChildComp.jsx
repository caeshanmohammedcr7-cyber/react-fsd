import React from 'react'
import BabyComp from './BabyComp'

const ChildComp = ({name, dept}) => {
  return (
    <>
    <h1>Child Comp</h1>
    <ul>
        <li><h2>Name: {name}</h2></li>
    <h2>Department: {dept}</h2>
    </ul>
    <BabyComp sibling = "Manu"></BabyComp>
    </>
  )
}

export default ChildComp