import React from 'react'
import { GlobalContext } from '../context.jsx';
import { useContext } from "react";

const ComponentTwo = () => {

    let { state, dispatch } = useContext(GlobalContext);

  return (
   <>
    <div>Component Two Is {state.myNum}</div>
    <button onClick={() => dispatch({ type: "SUB" })}>Delete</button>
   </>
  )
}

export default ComponentTwo