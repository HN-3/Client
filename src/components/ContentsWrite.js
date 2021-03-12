
import React,{useState} from "react";
import {Image} from "react-bootstrap"
import image from "../image/image.jpeg"
import {Heart,ChatDots,Envelope,BookmarkCheck} from "react-bootstrap-icons"
const ContentsWrite =()=>{
    const [img ,setImage] = useState({file:null,previewURL:""});
    const [tempfile,setTempfile] = useState();
    let profile_preview = null;
    if(img.file !== ''){
        
      profile_preview = <img className='profile_preview' src={img.previewURL}></img>
    }
    const handleFileOnChange = (event) => {
        event.preventDefault();
        setTempfile(event.target.files[0]);
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
          setImage({
            file : file,
            previewURL : reader.result //file contents 
          })
        
        }
        
        reader.readAsDataURL(file);
     
      }
      
    return (
        <>
        <input 
        className="image2"
        type='file' 
                accept='image/jpg,image/png,image/jpeg,image/gif' 
                name='profile_img' 
                onChange={handleFileOnChange}>
        </input> 
        {profile_preview}
        </>
    )
}
export default ContentsWrite;