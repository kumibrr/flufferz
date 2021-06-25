import { UPDATE_DOG_PHOTOS_FAILED, UPDATE_DOG_PHOTOS_STARTED, UPDATE_DOG_PHOTOS_SUCCESS } from "../constants/actions";

const initialState = {
  dogPhotos: undefined,
  loading: false,
  error: undefined
}

const dogPhotosReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_DOG_PHOTOS_STARTED:
      return { ...state, loading: true, error: undefined }
    case UPDATE_DOG_PHOTOS_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case UPDATE_DOG_PHOTOS_FAILED:
      return { ...state, loading: false, ...action.payload };
    default:
      return state;
  }
}

export default dogPhotosReducer;