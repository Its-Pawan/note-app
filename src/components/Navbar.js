import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
export default function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg`} style={props.myStyle}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.logo}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.link1}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/about">{props.link2}</Link>
                            </li>

                        </ul>

                        <button className="btn theme-btn " style={props.myStyle} onClick={props.toggleStyle}><i className={`fa-solid fs-4 fa-${props.themeIcon} px-2`}></i></button>
                    </div>
                </div>
            </nav>
        </>
    )
}




// After setting this, these props will accept only string because we set type = .String, and logo is required because it is setted to required
Navbar.propTypes = {
    logo: PropTypes.string.isRequired,
    link1: PropTypes.string,
    link: PropTypes.string
}

//If there is no props passed to these variables ^^ this will pring
Navbar.defaultProps = {
    logo: "Set Logo or Text Here",
    link1: "Link 1",
    link2: "Link 2"
}
