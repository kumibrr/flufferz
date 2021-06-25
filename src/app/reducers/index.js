import { combineReducers } from "@reduxjs/toolkit";
import { UPDATE_BREED_LIST_FAILED, UPDATE_BREED_LIST_STARTED, UPDATE_BREED_LIST_SUCCESS, UPDATE_DOG_PHOTOS_FAILED, UPDATE_DOG_PHOTOS_STARTED, UPDATE_DOG_PHOTOS_SUCCESS } from "../constants/actions";

const initialState = {
  breedList: undefined,
  dogPhotos: undefined,
  loading: false
}

const breedListReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_BREED_LIST_STARTED:
      return { ...state, loading: true }
    case UPDATE_BREED_LIST_SUCCESS:
      return { ...state, ...action.payload, loading: false };
    case UPDATE_BREED_LIST_FAILED:
      return { ...state, ...action.payload, loading: false };
    default:
      return state;
  }
}

const dogPhotosReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_DOG_PHOTOS_STARTED:
      return { ...state, loading: true }
    case UPDATE_DOG_PHOTOS_SUCCESS:
      return { ...state, ...action.payload, loading: false };
    case UPDATE_DOG_PHOTOS_FAILED:
      return { state, ...action.payload, loading: false };
    default:
      return state;
  }
}

export default combineReducers({breedListReducer, dogPhotosReducer})