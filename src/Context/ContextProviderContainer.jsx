import React from 'react'
import DebounceContextProvider from './searches/DebounceContextProvider'
import SideBarContextProvider from './sidebar/SideBarContextProvider'
import SearchContextProvider from './searches/SearchContextProvider'

const ContextProviderContainer = ({children}) => {
  return (
    <DebounceContextProvider>
      <SearchContextProvider> 
        <SideBarContextProvider>
          {children}
        </SideBarContextProvider>
      </SearchContextProvider>
    </DebounceContextProvider>
  )
}

export default ContextProviderContainer