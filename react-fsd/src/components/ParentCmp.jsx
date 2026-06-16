import React from 'react'
import ChildComp from './ChildComp'

const ParentCmp = () => {
  return (
    <>
    <h1>Parent Comp</h1>
    <ChildComp name = "Kishore" dept = "CSE"></ChildComp>
    </>
  )
}

export default ParentCmp