import { useTranslation } from "react-i18next";
import "./header.css";


function Header() {
  
  const { t, i18n } = useTranslation();

  return (
    <div className="header">
      <h1>flufferz</h1>
      <div className="languagueSelectionContainer">
        <label htmlFor="language">{t('language.select')}: </label>
        <select name="language" id="language">
          <option value="en_EN">English</option>
          <option value="es_ES">Español</option>
        </select>
      </div>
    </div>
    
  );
}

export default Header;