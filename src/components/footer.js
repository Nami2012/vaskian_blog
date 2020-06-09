import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Footer = () => (
  <footer
    style={{
      background: `#08B6CE`,
      marginTop: `1.45rem`,
      position: `fixed`,
      bottom: `0`,
    }}
  >
    <div
      style={{
        maxWidth: 960,
        textAlign:`right`,
        padding: `1.45rem 1.0875rem`,
      
      }}
    >
       <h1 style={{ margin: 0 ,
                    }}> 
         © {new Date().getFullYear()}, Built with
          {` `}
       
        <Link
          to="https://www.gatsbyjs.org"
          style={{color: `white`,
                textDecoration: `none`,
            }}
        >
          Gatsby
        </Link>
      </h1>

    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
