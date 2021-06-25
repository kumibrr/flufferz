import { CLEAR_BREED_LIST, UPDATE_BREED_LIST_STARTED, UPDATE_BREED_LIST_SUCCESS } from "../constants/actions";

const initialState = {
  breedList: ['hola'],
  breedPhotos: [],
  
}

export const rootReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case CLEAR_BREED_LIST: 
      return { ...state, breedList: [] };
    case UPDATE_BREED_LIST_STARTED:
      return { ...state, breedList: 'loading' }
    case UPDATE_BREED_LIST_SUCCESS:
      return { ...state, breedList: action.payload };
    default:
      return state;
  }

}