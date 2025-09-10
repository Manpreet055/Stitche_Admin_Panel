import React, { useState } from 'react'
import SearchValueContext from './searches/SearchValueContext'

const SearchValueContextProvider = ({children}) => {
    const [searchValue,setSearchValue] = useState(null)
  return (
    <SearchValueContext.Provider value={{searchValue,setSearchValue}}>
        {children}
    </SearchValueContext.Provider>
  )
}

export default SearchValueContextProvider