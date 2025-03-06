import { useGlobalContext } from '../context/GlobalContext';

const Header = () => {

    const {query, setQuery, handleSubmit} = useGlobalContext ();

    return(
        <header>
        <h1>Boolflix</h1>
        <form onSubmit={handleSubmit}>
            <input 
             type="text" 
             className="form-control" 
             placeholder="Titolo film..."
             value={query}
             onChange={(e) => setQuery(e.target.value)} />
            <input 
             type="submit"
             value="CERCA"/>
        </form>
        </header>
    )
}

export default Header;