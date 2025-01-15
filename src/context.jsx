import React, { createContext, useReducer } from "react"
import { reducer } from "./reducer.jsx";
export const GlobalContext = createContext("Initial Value");
let data = {
  user: {},
  darkTheme: true,
  myNum : 0,
  // user: null,
  // darkTheme: false,
}
export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data)
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}