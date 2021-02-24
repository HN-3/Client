import React from "react";
import './nav.css'
import {HouseDoorFill,Envelope,Compass,Heart,PersonCircle} from 'react-bootstrap-icons'
const Navigation =()=>{
    return (
        <div className ="hi">
            <div className = "logo"> instagram </div>
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