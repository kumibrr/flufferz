import { combineReducers } from "@reduxjs/toolkit";
import breedListReducer from "./breedListReducer";
import dogPhotosReducer from "./dogPhotosReducer";

export default combineReducers({breedListReducer, dogPhotosReducer})