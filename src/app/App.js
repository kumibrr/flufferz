import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Pictures from './components/pictures/pictures';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { retrieveDogPhotos } from './actions/api';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';

function App({t, breedList, retrieveDogPhotos, loadingList, loadingPhotos}) {

  const [selectedValue, setSelectedValue] = useState();

  const handlePhotoRefresh = () => {
    retrieveDogPhotos(selectedValue.breed, selectedValue.subBreed)
  };

  const handleSelectChange = (ev) => {
    let [breed, subBreed] = ev.target.value.split('#');
    setSelectedValue({breed, subBreed});
  }

  useEffect(() => {
    selectedValue && retrieveDogPhotos(selectedValue.breed, selectedValue.subBreed);
  }, [retrieveDogPhotos, selectedValue]);

  return (
    <div>
      <ErrorComponent></ErrorComponent>
      <Header></Header>
      <div className="content">
        <h1>{t('breedSelect.title')}:</h1>
        <div>
          <button alt={t('updateBreedList.button')} onClick={handlePhotoRefresh}>
            <i className={loadingList || loadingPhotos ? 'fas fa-sync-alt fa-spin' : 'fas fa-sync-alt'}></i>
          </button>
          <select onChange={(ev) => handleSelectChange(ev)}>
            <option>--</option>
            {
              breedList?.map?.((breed, i) => {
                return (
                  <Fragment>
                    <option key={i} value={`${breed.breed}#${breed.breed}`}>{breed.breed}</option>
                    {
                      breed.subBreeds?.map?.((value, j) => {
                        return <option key={`${i}.${j}`} value={`${breed.breed}#${value}`}>&nbsp;&nbsp;&nbsp;&nbsp;&#183;{value}</option>
                      })
                    }
                  </Fragment>)
              })
            }
          </select>
        </div>
        <Pictures></Pictures>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return { 
    breedList: store.breedListReducer.breedList,
    loadingList: store.breedListReducer.loading,
    loadingPhotos: store.dogPhotosReducer.loading
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      retrieveDogPhotos: (baseBreed, subBreed) => dispatch(retrieveDogPhotos({baseBreed, subBreed}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(App));
