export const initialState = {
    user: null,
    admin: null,
    info: [],
  };
  
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        }

        case "ADD_BOOKING":
          return {
            ...state,
            info: [...state.info, action.client]
          }
  
      default:
        return state;
    }
  };
  
  export default reducer;