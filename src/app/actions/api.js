import { updateBreedListFailed, updateBreedListStarted, updateBreedListSuccess } from "./breedList";
import { updateDogPhotosFailed, updateDogPhotosStarted, updateDogPhotosSuccess } from "./breedPhotos";

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
          let parsedResponse = Object.entries(data.message)?.map?.((breedArr) => {
            let [breed, subBreeds] = breedArr;
            return {breed, subBreeds};
          })
          return dispatch(updateBreedListSuccess(parsedResponse))
        })
        .catch(e => dispatch(updateBreedListFailed(e)));
    }, 1000);
  }
}

export const retrieveDogPhotos = (payload) => {
  return dispatch => {
    dispatch(updateDogPhotosStarted());
    // I've added a setTimeout so the loading animation can be noticed.
      setTimeout(() => {
        fetch(`https://dog.ceo/api/breed/${payload.baseBreed}/images`, {method: 'GET'})
        .then(response => response.json()).catch(e => dispatch(updateDogPhotosFailed(e)))
        .then(data => {
          if (data.status !== 'success') {
            return dispatch(updateDogPhotosFailed({code: '500'}));
          }
          return dispatch(updateDogPhotosSuccess(data.message.filter(uri => uri.includes(payload.subBreed))));
        })
        .catch(e => dispatch(updateDogPhotosFailed(e))); 
      }, 1000);
  }
}