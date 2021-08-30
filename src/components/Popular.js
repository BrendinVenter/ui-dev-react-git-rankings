import React, { useState } from 'react';
import LanguagesNav from './ui/LanguagesNav';

// Data
const languageData = [
  { id: Math.random().toString(), name: 'All' },
  { id: Math.random().toString(), name: 'JavaScript' },
  { id: Math.random().toString(), name: 'HTML' },
  { id: Math.random().toString(), name: 'CSS' },
  { id: Math.random().toString(), name: 'Ruby' },
  { id: Math.random().toString(), name: 'Python' },
  { id: Math.random().toString(), name: 'PHP' },
];

// markup
const Popular = () => {
  // State
  // eslint-disable-next-line no-unused-vars
  const [languages, setLanguages] = useState(languageData);
  // eslint-disable-next-line no-unused-vars
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  // Functions
  const updateSelectedLanguage = (e) => {
    setSelectedLanguage(e.target.textContent);
  };

  return (
    <>
      <LanguagesNav
        languages={languages}
        handleClick={updateSelectedLanguage}
      />
    </>
  );
};
export default Popular;
