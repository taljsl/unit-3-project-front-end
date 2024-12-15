import React from 'react'

import '../AllLists.css'
import useColorScheme from '../../custom-hooks/useColorScheme'

const ListPlaceholder = ({ header }) => {
  
  const colorScheme = useColorScheme()

  const isDark = colorScheme === 'dark' ? 'inverted' : ''  
  return (
    <div className="list-container">
        <h2 className="media-title-header">{header}</h2>
        
        <ul
        className="ul-card-holder" style={{ width: '100vw'}}
        >
          <div className={`ui placeholder ${isDark}`} style={{ minWidth: '150px', height: '200px', borderRadius: '4px', boxShadow: '2px 5px 8px rgba(0, 0, 0, 0.178)' }}></div>
          <div className={`ui placeholder ${isDark}`} style={{ minWidth: '150px', height: '200px', borderRadius: '4px', boxShadow: '2px 5px 8px rgba(0, 0, 0, 0.178)' }}></div>
          <div className={`ui placeholder ${isDark}`} style={{ minWidth: '150px', height: '200px', borderRadius: '4px', boxShadow: '2px 5px 8px rgba(0, 0, 0, 0.178)' }}></div>
          <div className={`ui placeholder ${isDark}`} style={{ minWidth: '150px', height: '200px', borderRadius: '4px', boxShadow: '2px 5px 8px rgba(0, 0, 0, 0.178)' }}></div>
          <div className={`ui placeholder ${isDark}`} style={{ minWidth: '150px', height: '200px', borderRadius: '4px', boxShadow: '2px 5px 8px rgba(0, 0, 0, 0.178)' }}></div>
          <div className={`ui placeholder ${isDark}`} style={{ minWidth: '150px', height: '200px', borderRadius: '4px', boxShadow: '2px 5px 8px rgba(0, 0, 0, 0.178)' }}></div>
          <div className={`ui placeholder ${isDark}`} style={{ minWidth: '150px', height: '200px', borderRadius: '4px', boxShadow: '2px 5px 8px rgba(0, 0, 0, 0.178)' }}></div>
          <div className={`ui placeholder ${isDark}`} style={{ minWidth: '150px', height: '200px', borderRadius: '4px', boxShadow: '2px 5px 8px rgba(0, 0, 0, 0.178)' }}></div>
          <div className={`ui placeholder ${isDark}`} style={{ minWidth: '150px', height: '200px', borderRadius: '4px', boxShadow: '2px 5px 8px rgba(0, 0, 0, 0.178)' }}></div>
          
        </ul>

      </div>
  )
}

export default ListPlaceholder