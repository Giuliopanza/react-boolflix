import { createContext, useState, useContext } from 'react';

import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const apiKey= import.meta.env.VITE_API_KEY;
    
    const url = import.meta.env.VITE_API_URL;

    const [query, setQuery] = useState();

    const [film, setFilm] = useState ()

    const [tv, setTv] = useState ()

    function fetchFilm() {
      axios.get(`${url}/movie?api_key=${apiKey}&query=${query}`)
      .then((res) => setFilm(res.data));
    }

    function fetchTv() {
      axios.get(`${url}/tv?api_key=${apiKey}&query=${query}`)
      .then((res) => setTv(res.data));      
    }

    

  const value = {
    query,
    setQuery,
    film,
    tv
  }


  return(
    <GlobalContext.Provider value={ value }>
        {children}
    </GlobalContext.Provider>
  )

};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };