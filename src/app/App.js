import React from 'react';
import './App.css';
import Header from './components/header/header';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { retrieveBreedList } from './actions/api';

function App({t, breedList, retrieveBreedList}) {

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
              breedList.map?.((breed, index) => {
                return <option key={index} value="breed">{breed}</option>
              })
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
