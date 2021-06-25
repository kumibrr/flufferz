import { UPDATE_DOG_PHOTOS_FAILED, UPDATE_DOG_PHOTOS_STARTED, UPDATE_DOG_PHOTOS_SUCCESS } from "../constants/actions";


export const updateDogPhotosStarted = () => ({ type: UPDATE_DOG_PHOTOS_STARTED});

export const updateDogPhotosSuccess = dogPhotos => ({ type: UPDATE_DOG_PHOTOS_SUCCESS, payload: { dogPhotos } });

export const updateDogPhotosFailed = error => ({ type: UPDATE_DOG_PHOTOS_FAILED, payload: { error } });