import React from 'react'
import Helmet from 'react-helmet'
import {PopUp} from "../components/PopUp/PopUp"
import {Header} from '../components/Header/Header'
import {Footer} from "../components/Footer/Footer";
import {Top} from "../components/Top/Top"
import {Bottom} from "../components/Bottom/Bottom"
import {Left} from "../components/Left/Left"
import {Right} from "../components/Right/Right"
import './index.css'

const PROPERTY_POPUP = 'popup'
const PROPERTY_BOTTOM = 'bottom'
const PROPERTY_TOP = 'top'
const PROPERTY_LEFT = 'left'
const PROPERTY_RIGHT = 'right'
const LOCAL_STORAGE_KEY = 'visited'

class Layout extends React.Component {

    state = {
        bottom: true,
        left: true,
        popup: true,
        right: true,
        top: true,
        visited: true,
    }
    
    componentDidMount() {
        const visited = window.localStorage.getItem(LOCAL_STORAGE_KEY)

        if(!visited) {
            this.setState({
                visited: false,
            })
        }
    }

    visited = callback => {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, 1)
        this.setState({
            visited: true
        }, () => callback)
    }

    close = property => () => {

        const {
            [property]: current
        } = this.state

        switch (property) {
            case PROPERTY_POPUP:
            case PROPERTY_BOTTOM:
            case PROPERTY_LEFT:
            case PROPERTY_RIGHT:
            case PROPERTY_TOP:
                this.setState({
                    [property]: !current
                })
        }
    }

    display(properties) {

        let set = 0;
        for (let i = 0; i < properties.length; i++)
            if(properties[i] === false)
                set += 1

        return properties.length - set === 1
    }

    render() {

        const {children, data} = this.props
        const {
            bottom,
            left,
            popup,
            right,
            top,
            visited,
        } = this.state

        const displayTop = this.display([popup, top])
        const displayBottom = this.display([popup, top, bottom])
        const displayLeft = this.display([popup, top, bottom, left])
        const displayRight = this.display([popup, top, bottom, left, right])

        return (
            <div>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        {name: 'description', content: 'We Use Cookies'},
                    ]}
                />
                <Top
                    close={this.close(PROPERTY_TOP)}
                    display={displayTop}
                />
                <Header siteTitle={data.site.siteMetadata.title}/>
                <div className='content--wrapper'>
                    {children()}
                </div>
                <Footer />
                {!visited && (
                    <PopUp
                        close={this.close(PROPERTY_POPUP)}
                        display={popup}
                    />
                )}
                {!visited && (
                    <Bottom
                        close={this.close(PROPERTY_BOTTOM)}
                        display={displayBottom}
                    />
                )}
                {!visited && (
                    <Left
                        close={this.close(PROPERTY_LEFT)}
                        display={displayLeft}
                    />
                )}
                {!visited && (
                    <Right
                        close={() => {
                            const callback = this.close(PROPERTY_RIGHT)

                            this.visited(callback)
                        }}
                        display={displayRight}
                    />
                )}
            </div>
        )
    }
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
