import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { retrieveDogPhotos } from './actions/api';

function NestedOptions({base, values}) {
  
}



function App({t, breedList, retrieveDogPhotos, loading}) {

  const [selectedValue, setSelectedValue] = useState();

  const handlePhotoRefresh = () => {
    retrieveDogPhotos({selectedValue})
  };

  const handleSelectChange = (ev) => {
    console.log(ev);
  }

  return (
    <div>
      <Header></Header>
      <div className="content">
        <h1>{t('breedSelect.title')}:</h1>
        <div>
          <button alt={t('updateBreedList.button')} onClick={handlePhotoRefresh}>
            <i className={loading ? 'fas fa-sync-alt fa-spin' : 'fas fa-sync-alt'}></i>
          </button>
          <select onChange={(ev) => handleSelectChange(ev)}>
            <option>--</option>
            {
              breedList?.map?.((breed, i) => {
                return (
                  <Fragment>
                    <option key={`${breed.breed}.${i}`} value={breed.breed}>{breed.breed}</option>
                    {
                      breed.subBreeds?.map?.((value, j) => {
                        return <option key={`${i}.${j}`} value={value}>&nbsp;&nbsp;&nbsp;&nbsp;&#183;{value}</option>
                      })
                    }
                  </Fragment>)
              })
            }
          </select>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return { 
    breedList: store.breedListReducer.breedList,
    loading: store.dogPhotosReducer.loading
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      retrieveDogPhotos: (baseBreed, subBreed) => dispatch(retrieveDogPhotos({baseBreed, subBreed}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(App));
