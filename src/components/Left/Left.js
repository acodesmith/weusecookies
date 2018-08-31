import React from 'react'
import Link from 'gatsby-link'
import { Button } from "../Button/Button"
import './Left.css'

const Left = ({ display, close }) => {

    if(!display)
        return null

    return (
        <div className='left--wrapper'>
            <span>
                Our site will track any and all information we can about your time on our site.
                Then sell any of the useful information to third party advertisers. If you are
                on another site, targeted ads will appear beckoning you back to our site.
                <br /><br />Also, we use cookies. By continuing to use our site you
                    agree to our <Link to={'/cookie-policy'}>cookie policy</Link>
            </span>
            <Button onClick={close}>
                ACCEPT AND CLOSE
            </Button>
        </div>
    )
}

export { Left }