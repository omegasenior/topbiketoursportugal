import React from "react";
// import './Logo.css'
// import languages from "../data/languages";
import { Link } from "gatsby";
import FlagIconFactory from "react-flag-icon-css";

const LanguageSwitcher = ({ language, languageAlternateLinks }) => (
  <>
    {/* {languages.langs.map(language => (
      <Link to={"/" + languages.defaultLangKey !== language ? language : ""}>{languages.Display}</Link>
    ))} */}
    <Link to="/" alt="English">
      {/* <FlagIcon code={props.code} size={props.size} /> */}
      <FlagIcon code="gb" />
    </Link>
    <Link to="/pt" alt="Português">
      {/* <FlagIcon code={props.code} size={props.size} /> */}
      <FlagIcon code="pt" />
    </Link>
  </>
);

const FlagIcon = FlagIconFactory(React, { useCssModules: false });

export default LanguageSwitcher;
