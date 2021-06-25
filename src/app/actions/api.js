import { updateBreedListFailed, updateBreedListStarted, updateBreedListSuccess } from "./breedList";

export const RETRIEVE_BREED_LIST = 'retrieve/breedList';

export const retrieveBreedList = () => {
  return dispatch => {
    dispatch(updateBreedListStarted());
    // I've added a setTimeout so the loading animation can be noticed.
    setTimeout(() => {
      fetch('https://dog.ceo/api/breeds/list/all', {method: 'GET'})
        .then(response => response.json()).catch(e => dispatch(updateBreedListFailed(e)))
        .then(data => {
          if (data.status !== 'success') {
            return dispatch(updateBreedListFailed({code: '500'}));
          }
          return dispatch(updateBreedListSuccess(data.message))
        })
        .catch(e => dispatch(updateBreedListFailed(e)));
    }, 1000);
    
  }
}