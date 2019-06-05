import{
  FETCH_CHARS_START,
  FETCH_CHARS_SUCCESS,
  FETCH_CHARS_FAILURE
} from "../actions";


const initialState = {
  characters: [],
  error: null,
  isFetching: false
  
  // Array characters, Boolean fetching, null error.
};
function charsReducer (state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_CHARS_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    
    case FETCH_CHARS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        error: "",
        isFetching: false
    };

    case FETCH_CHARS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
