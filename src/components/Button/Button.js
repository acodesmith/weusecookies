import React from 'react'
import './Button.css'

const Button = ({ children, className = '', ...props }) => (
    <button className={`btn ${className}`} {...props}>
        {children}
    </button>
)

export { Button }