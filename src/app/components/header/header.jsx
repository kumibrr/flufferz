import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./header.css";


function Header() {
  
  const { t, i18n } = useTranslation();
  const [languageList] = useState(Object.keys(i18n.services.resourceStore.data));

  const languageSelected = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <div className="header">
      <h1>flufferz</h1>
      <div>
        <label htmlFor="language">{t('languageSelect.label')}: </label>
        <select 
          name="language" 
          id="language" 
          value={i18n.language.slice(0, 2)} 
          onChange={(event) => languageSelected(event.target.value)}
        >
          {
            languageList.map((lng, index) => {
              return lng && <option key={index} value={lng}>{t(lng)}</option>;
            })
          }
        </select>
      </div>
    </div>
    
  );
}

export default Header;