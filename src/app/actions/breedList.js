import { CLEAR_BREED_LIST, UPDATE_BREED_LIST_FAILED, UPDATE_BREED_LIST_STARTED, UPDATE_BREED_LIST_SUCCESS } from "../constants/actions";

export const clearBreedList = () => ({ type: CLEAR_BREED_LIST });

export const updateBreedListStarted = () => ({ type: UPDATE_BREED_LIST_STARTED});

export const updateBreedListSuccess = breedList => ({ type: UPDATE_BREED_LIST_SUCCESS, payload: { breedList } });

export const updateBreedListFailed = error => ({ type: UPDATE_BREED_LIST_FAILED, payload: { error } });