import React, { useState } from 'react'
import SearchContext from './SeachContext'

const SearchContextProvider = ({children}) => {
const [searchItems,setSearchItems] = useState(null);
  return (
    
    <SearchContext.Provider value={{searchItems,setSearchItems}}>
        {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider