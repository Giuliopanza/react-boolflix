const Header = () => {
    return(
        <header>
        <h1>Boolflix</h1>
        <form action="">
            <input 
             type="text" 
             className="form-control" 
             placeholder="Titolo film..." 
             value={search}/>
            <input 
             type="submit"
             value="CERCA" 
             onClick={(e) => setSearch(search)} />
        </form>
        </header>
    )
}

export default Header;