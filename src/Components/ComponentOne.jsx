import React from 'react'
import { GlobalContext } from '../context.jsx';
import { useContext } from "react";

const ComponentOne = () => {
    
    let { state, dispatch } = useContext(GlobalContext);

  return (
   <>
    <div>Component One Is {state.myNum}</div>
   <button onClick={()=>dispatch({type:"ADD"})}>Added</button>
   </>
  )
}

export default ComponentOne