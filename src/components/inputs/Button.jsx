import React from 'react'

import './Button.css'

const Button = ({text, handleOnClick, icon, styles, type='submit'}) => {
  return (
    <button
     className='custom-button'
     type={type}
     onClick={handleOnClick}
     style={styles}
    >
        {icon} {text}
    </button>
  )
}

export default Button