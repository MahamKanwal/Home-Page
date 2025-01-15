// export const reducer = (state, action) => {
  
//     switch (action.type) {
//       case "USER_LOGIN": {
//         return { ...state, user: action.payload }
//       }
//       case "ADD": {
//         return { ...state, myNum: state.myNum+1 }
//       }
//       case "SUB": {
//         return { ...state, myNum: state.myNum-1 }
//       }
//       case "USER_LOGOUT": {
//         return { ...state, user: null } 
//       }
//       case "CHANGE_THEME": {
//         return { ...state, darkTheme: !state.darkTheme }
//       }
//       default: {
//        return state
//       }
//     }
//   }

export const reducer = (state, action) => {
    console.log(action);  // Log action to see the type being dispatched
    console.log(state);   // Log the current state
  
    switch (action.type) {
      case "USER_LOGIN": {
        return { ...state, user: action.payload };
      }
      case "ADD": {
        return { ...state, myNum: state.myNum + 1 };
      }
      case "SUB": {
        return { ...state, myNum: state.myNum - 1 };
      }
      case "USER_LOGOUT": {
        return { ...state, user: null };
      }
      case "CHANGE_THEME": {
        return { ...state, darkTheme: !state.darkTheme };
      }
      default: {
        return state;
      }
    }
  };
  