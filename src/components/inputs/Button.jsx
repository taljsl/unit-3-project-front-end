import React from 'react'

import './Button.css'

const Button = ({text, handleOnClick, icon, styles}) => {
  return (
    <button
     className='custom-button'
     onClick={handleOnClick}
     style={styles}
    >
        {icon} {text}
    </button>
  )
}

export default Button