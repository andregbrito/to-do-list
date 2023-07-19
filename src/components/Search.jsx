const Search = ({search, setSearch}) => {
  return <div className="search">
          <h2>Search:</h2>
          <input
            type="text"
            value={search} 
            onChange={(e) => 
            setSearch(e.target.value)} 
            placeholder="" 
          />
        
        </div>
  
}

export default Search;