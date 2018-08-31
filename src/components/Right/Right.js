import React from 'react'
import Link from 'gatsby-link'
import { Button } from "../Button/Button"
import './Right.css'

const Right = ({ display, close }) => {

    if(!display)
        return null

    return (
        <div className='right--wrapper'>
            <span>
                Our site knows who you are and what you desire. We have looked into the depths
                of your soul and teased out your unquenchable thirst. We will dangle offers
                of happiness in front of your eyes, triggering you to yearn for more!
                <br /><br />
                By the way, we use cookies to track information about your visit.
                By continuing to use our site you agree to our
                <Link to={'/cookie-policy'}>cookie policy</Link>.
            </span>
            <Button onClick={close}>
                ACCEPT AND CLOSE
            </Button>
        </div>
    )
}

export { Right }