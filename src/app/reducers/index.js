import { UPDATE_BREED_LIST_STARTED, UPDATE_BREED_LIST_SUCCESS } from "../constants/actions";

const initialState = {
  breedList: undefined,
  dogPhotos: [],
  
}

export const rootReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case UPDATE_BREED_LIST_STARTED:
      return { ...state, breedList: 'loading' }
    case UPDATE_BREED_LIST_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }

}