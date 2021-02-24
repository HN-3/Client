import React from "react";
import "./Home.css";
import {Image} from "react-bootstrap"
import image from "../image/image.jpeg"
import {Heart,ChatDots,Envelope,BookmarkCheck} from "react-bootstrap-icons"
const Home =()=>{
    return (
        <div className = "home">
        <div className = "profile"> 
            <div className = "imageContainer" >
                <img className = "profileImage" src = {image}></img>
            </div>
            <div className = "name">name</div>
            <div className = "follow">follow</div>
            <div className = "write">write</div>
        </div>
        <div className = "feed">
            <div className="header">
                <img className ="headerProfile" src={image}></img>
                <div className="headerName">haeina</div>
            </div>
            <img className="photo" src = {image}></img>
            <div className="contents">
                <Heart/>
                <ChatDots/>
                <Envelope/>
                <BookmarkCheck/>
            </div>
            <div className= "comment"></div>
        </div>
        </div>
    )
}
export default Home;