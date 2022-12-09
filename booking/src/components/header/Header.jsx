import React from 'react'
import { faBed, faCar, faPlane, faSignIn, faTaxi, faUserPlus } from "@fortawesome/free-solid-svg-icons" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
                <div className="headerListItem btn">
                    <button className="navBtn">                
                        <FontAwesomeIcon icon={faUserPlus} />
                        &nbsp; Register
                    </button>
                    <button className="navBtn">                
                        <FontAwesomeIcon icon={faSignIn} />
                        &nbsp; Login
                    </button>
                </div>
            </div>
            <h1 className="headerTitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            <p className="headerDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, repudiandae. Iusto odio incidunt nihil labore qui fugit natus dolorem accusamus reprehenderit ex aperiam omnis quaerat dolorum, molestias animi magni nobis!</p>
            <button className="headerBtn">Sign in / Register</button>
        </div>
    </div>
  )
}

export default Header