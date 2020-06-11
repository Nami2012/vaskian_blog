import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#08B6CE`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.00rem 1.0765rem`,
        textAlign:`right`
      }}
    >
       <h3 style={{ margin: 0 }}> 
        <Link
          to="/page-2/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Blog
        </Link>
      </h3>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
