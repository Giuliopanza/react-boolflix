import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const apiKey= import.meta.env.VITE_API_KEY;
    
    const urlFilm = import.meta.env.VITE_API_URL_MOVIES;

    const urlSerie = import.meta.env.VITE_API_URL_MOVIES;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `${apiKey}`
        }
    };

    fetch(urlFilm, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));

   fetch(urlSerie, options)
   .then(res => res.json())
   .then(json => console.log(json))
   .catch(err => console.error(err));


  const value = {
  }


  return(
    <GlobalContext.Provider value={ value }>
        {children}
    </GlobalContext.Provider>
  )

};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };