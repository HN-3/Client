import React from "react";
import './nav.css'
import {HouseDoorFill,Envelope,Compass,Heart,PersonCircle} from 'react-bootstrap-icons'
import logo from "../../image/instagram_logo_free.png"
const Navigation =()=>{
    return (
        <div className ="hi">
            <div className = "logo"> 
                <img src={logo}/>
            </div>
            <div className = "search">검색</div>
            <div className = "icons">
                 <HouseDoorFill className="icon"/>
                 <Envelope className="icon"/>
                 <Compass className="icon"/>
                 <Heart className="icon"/>
                 <PersonCircle className="icon"/>
            </div>

        </div>
    )
}
export default Navigation;