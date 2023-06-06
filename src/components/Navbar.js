import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-3`}>
                <Link className="navbar-brand" to="#"><img src={logo} alt="Text Utility" style={{width: "40px", backgroundColor: "white", borderRadius: "10px"}} /> <b>{props.title}</b></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                            {/* <a className="nav-link" href="/about">About Us</a> */}
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-0 d-flex flex-row">
                        <li className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} `}>
                            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </li>
                        <li className="d-flex mx-2">
                            <div className="bg-primary rounded mx-2" onClick={() => { props.colormode('primary') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
                            <div className="bg-danger rounded mx-2" onClick={() => { props.colormode('danger') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
                            <div className="bg-success rounded mx-2" onClick={() => { props.colormode('success') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
                            <div className="bg-warning rounded mx-2" onClick={() => { props.colormode('warning') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    // aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Logo',
    // aboutText: 'About text here'
}