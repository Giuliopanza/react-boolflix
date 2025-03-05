import Header from "./componets/Header"

import Main from "./componets/Main"

import { GlobalProvider } from './context/GlobalContext';

function App() {


  return (

    <GlobalProvider>
      <Header/>
      <Main/>
    </GlobalProvider>

  )
}

export default App
