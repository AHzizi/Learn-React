import React from 'react'

const NewButton = ({children, className, onClick, href, px, white}) => {
  return (
    <button>
        <span>{children}</span>
        
    </button>
  )
}

export default NewButton