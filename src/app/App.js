import React, { Fragment, useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { retrieveBreedList } from './actions/api';

function NestedOptions({base, values}) {
  return (
  <Fragment>
    <option key={`${base}.${values.length}`} value={base}>{base}</option>
    {
      values.map?.((value, i) => {
        return <option key={`${value}.${i}`} value={value}> -{value}</option>
      })
    }
  </Fragment>)
}

function App({t, breedList, retrieveBreedList}) {

  useEffect(() => console.log(breedList), [breedList]);

  return (
    <div>
      <Header></Header>
      <div className="content">
        <h1>{t('breedSelect.title')}:</h1>
        <div>
          <button alt={t('updateBreedList.button')} onClick={retrieveBreedList}>
            <i className={breedList === 'loading' ? 'fas fa-sync-alt fa-spin' : 'fas fa-sync-alt'}></i>
          </button>
          <select>
            {
              typeof breedList === 'object' ?
                Object.entries(breedList)?.map?.((breedArr, i) => {
                  let [breed, subBreeds] = breedArr;
                  return <NestedOptions base={breed} values={subBreeds}></NestedOptions>
                }) 
              :
              ''
            }
          </select>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return { breedList: store.breedList }
}

const mapDispatchToProps = (dispatch) => {
    return {
      retrieveBreedList: () => dispatch(retrieveBreedList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(App));
