import React from 'react'
import './Footer.css'

const Footer = props =>
{
    const { } = props

    return (
        <div className='footer--wrapper'>
            Site by <a href='http://twitter.com/acodesmith'>@acodesmith</a>.  <small>* This site does <em>not</em> use cookies.</small>
        </div>
    )
}

export { Footer }