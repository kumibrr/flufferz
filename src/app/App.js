import React from 'react';
import './App.css';
import Header from './components/header/header';
import { withTranslation } from 'react-i18next';

function App({t}) {
  return (
    <div>
      <Header></Header>
      <div className="content">
        <h1>{t('breedSelect.title')}:</h1>
        <select></select>
      </div>
    </div>
  );
}

export default withTranslation()(App);
