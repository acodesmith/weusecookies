import React from 'react'
import Link from 'gatsby-link'
import { Button } from "../Button/Button"
import './Top.css'

const Top = ({ display, close }) => {

    if(!display)
        return null

    return (
        <div className='top--wrapper'>
            <span>Our site uses a lot cookies. By continuing to use our site you
                    agree to our <Link to={'/cookie-policy'}>cookie policy</Link>.</span>
            <Button onClick={close}>
                ACCEPT AND CLOSE
            </Button>
        </div>
    )
}

export { Top }