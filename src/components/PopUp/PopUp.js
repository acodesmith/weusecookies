import React from 'react'
import Link from 'gatsby-link'
import './PopUp.css'
import { Button } from "../Button/Button"

const PopUp = ({ close, display }) =>
{
    if(!display)
        return null

    return (
        <div className='popup--wrapper'>
            <div className="popup--content">
                <p>
                    Our site uses cookies. By continuing to use our site you
                    agree to our <Link to={'/cookie-policy'}>cookie policy</Link>.
                    <Button onClick={close}>
                        ACCEPT AND CLOSE
                    </Button>
                </p>
            </div>
        </div>
    )
}

export { PopUp }