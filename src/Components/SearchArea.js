import React from 'react';

const SearchArea = (props) => {
    return(
        <div className='search-area'>
          <form onSubmit={props.searchBook} action="">
              <input onChange={props.handleSearch} type="text" placeholder="Search Books" className="inpt"/>
              <button type="submit" className="sub">Search</button>
              <select defaultValue="sort" onChange={props.handleSort}> 
                  <option value="sort">Sort</option>
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
              </select>
          </form>
        </div>
    );
}

export default SearchArea;