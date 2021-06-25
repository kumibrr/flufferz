import { UPDATE_BREED_LIST_FAILED, UPDATE_BREED_LIST_STARTED, UPDATE_BREED_LIST_SUCCESS } from "../constants/actions";

const initialState = {
  breedList: undefined,
  loading: false
}

const breedListReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_BREED_LIST_STARTED:
      return { ...state, loading: true }
    case UPDATE_BREED_LIST_SUCCESS:
      return { ...state, loading: false, ...action.payload, };
    case UPDATE_BREED_LIST_FAILED:
      return { ...state, loading: false, ...action.payload };
    default:
      return state;
  }
}

export default breedListReducer;