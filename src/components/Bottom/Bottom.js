import React from 'react'
import Link from 'gatsby-link'
import { Button } from "../Button/Button"
import './Bottom.css'

const Bottom = ({ display, close }) => {

    if(!display)
        return null

    return (
        <div className='bottom--wrapper'>
            <span>Our site uses every cookie. By continuing to use our site you
                agree to our <Link to={'/cookie-policy'}>cookie policy</Link>.</span>
            <Button onClick={close}>
                ACCEPT AND CLOSE
            </Button>
        </div>
    )
}

export { Bottom }