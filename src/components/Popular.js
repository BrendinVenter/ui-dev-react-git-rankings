import React from 'react';

// markup
const Popular = () => {
  const languages = [
    {
      id: Math.random().toString(),
      name: 'All',
    },
    {
      id: Math.random().toString(),
      name: 'JavaScript',
    },
    {
      id: Math.random().toString(),
      name: 'Ruby',
    },
    {
      id: Math.random().toString(),
      name: 'Java',
    },
    {
      id: Math.random().toString(),
      name: 'CSS',
    },
    {
      id: Math.random().toString(),
      name: 'Python',
    },
    {
      id: Math.random().toString(),
      name: 'PHP',
    },
  ];

  return (
    <ul>
      {languages.map((language) => (
        <li key={language.id}>{language.name}</li>
      ))}
    </ul>
  );
};

export default Popular;
