import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className='header--wrapper'>
      <h1>
          <Link
              to="/"
              style={{
                  color: 'white',
                  textDecoration: 'none',
              }}
          >
              {siteTitle}
          </Link>
      </h1>
  </div>
)

export { Header }
