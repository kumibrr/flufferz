import { UPDATE_DOG_PHOTOS_FAILED, UPDATE_DOG_PHOTOS_STARTED, UPDATE_DOG_PHOTOS_SUCCESS } from "../constants/actions";


export const updateDogPhotosStarted = () => ({ type: UPDATE_DOG_PHOTOS_STARTED});

export const updateDogPhotosSuccess = breedList => ({ type: UPDATE_DOG_PHOTOS_SUCCESS, payload: { breedList } });

export const updateDogPhotosFailed = error => ({ type: UPDATE_DOG_PHOTOS_FAILED, payload: { error } });