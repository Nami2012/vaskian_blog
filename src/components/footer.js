import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Footer = () => (
  <footer
    style={{
      background: `#08B6CE`,
      marginTop: `1.45rem`,
      position: `absolute`,
      bottom: `0`,
      width: `100%`
      
    }}
  >
    <div
      style={{

        margin: `auto`,
        maxWidth: 960,
        textAlign:`right`,
        padding: `1.45rem 1.0875rem`,
      
      }}
    >
       <h5 style={{ margin: 0 ,
                    textAlign: "center"
                    }}> 
         © {new Date().getFullYear()}, Built with
          {` `}
       
        <Link
          to="https://www.gatsbyjs.org"
          style={{color: `black`,
                textDecoration: `none`,
            }}
        >
          Gatsby
        </Link>
      </h5>

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
