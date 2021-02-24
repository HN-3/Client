import React from "react";
import "./Home.css";
import {Image} from "react-bootstrap"
import image from "../image/image.jpeg"
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
        <div className = "feed">feed</div>
        </div>
    )
}
export default Home;