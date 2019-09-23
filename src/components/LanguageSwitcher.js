import React from "react";
// import './Logo.css'
import languages from "../data/languages";
import { Link } from "gatsby";

const LanguageSwitcher = ({ language, languageAlternateLinks }) => (
  <>
    {/* {languages.langs.map(language => (
      <Link to={"/" + languages.defaultLangKey !== language ? language : ""}>{languages.Display}</Link>
    ))} */}
    <Link to="/">English</Link>
    <Link to="/pt">Português</Link>
  </>
);

export default LanguageSwitcher;
