import React from 'react'

const IndexPage = () => (
    <div>
        {/*<h1>Funny Name, Serious Tracking</h1>*/}
        <p>
            When a user interacts with a website, the interaction is valuable information for advertisers.
            In order to retain certain tidbits of information in your browser a developer has
            a few options. The oldest and most used option is called a Cookie. Even though
            the name is funny the technology has been in place for decades and is widely used
            by almost all websites. Cookies store information in your browser using a unique
            ID and expiration date. For example, a cookie could be used to store information about
            your current login state. The cookie would have an ID for your user and an
            expiration date. When the cookie's expiration date is passed, the information will
            be cleared from your browser, resulting in a user being logged out.
        </p>
        <h3>Ok, so why do I care?</h3>
        <p>
            Cookies have been found to be insecure. Browsers do their best to fix vulnerabilities
            but cookies are notorious attack vectors. Storing any sensitive user information in a
            cookie is considered a bad practice.
            <br /><br />
            Cookies are also used by almost every online advertising service. Advertisers create
            their own cookies for their tracking services. An important aspect of storing cookies
            is the ability to attach a cookie to the current domain. Meaning if I create a cookie
            on this website to store on your computer, only my website has the ability to
            access the cookie. Advertisers using embedded ads, insert their own mini-website
            on the page using an i-frame. The i-frame is just like a website inside a website.
            The advertising software then creates their own cookies attached to their domain.
            <br />
            <br />
        </p>
        <h3>I guess I'm following you?</h3>
        <p>
            Because advertisers embed the mini-website on any site using their software,
            they are able to track your data across multiple websites. Notice how ads for
            the same product show up on all the sites you visit? Yeah, that's a super cookie.
        </p>
        <h3>SUPER COOKIE!</h3>
        <p>
            So next time you agree to cookie tracking, realize you are agreeing to have
            your browsing history shared with third party advertisers. Realize your
            information is being collated to create a unique profile about your online behavior. The data can be
            used to target your <a href="https://www.psychologicalscience.org/news/releases/marketing-is-more-effective-when-targeted-to-personality-profiles.html">
            psychological profile</a>. The profile can and probably
            has been used by a political campaign to swing your opinion or sway
            your vote. Realize information is power and you are giving the power
            away.
        </p>
        <h3>Cookies: Funny Name, Serious Tracking</h3>
    </div>
)

export default IndexPage
