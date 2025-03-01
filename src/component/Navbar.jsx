import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div><>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode} `}>
          <div className="container-fluid">
            <a className="navbar-brand " href='#'>{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-Link active" aria-current="page" href='#'>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-Link"href='#'>{props.abouttitle}</a>
                </li>
             
              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
              <div className={`form-check form-switch text-${props.mode === "light" ?"dark":"light"} my-4`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggleMode}/>
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >{props.btnText}</label>
        </div>
            </div>
          </div>
        </nav>
        </>
          
        </div>
      )
    }
    // Navbar.propTypes = {title: propTypes.string.isRequired,
    //   abouttitle: propTypes.string
    // }
    
    // Navbar.defaultProps ={
    //   title: 'hii',
    //   abouttitle: 'world'
    // }
