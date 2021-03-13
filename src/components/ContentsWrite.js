
import React,{useState} from "react";
import {Image} from "react-bootstrap"
import image from "../image/image.jpeg"
import {Heart,ChatDots,Envelope,BookmarkCheck} from "react-bootstrap-icons"
import Axios  from 'axios'
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const ContentsWrite =()=>{
    const [img ,setImage] = useState({file:null,previewURL:""});
    const [text,setText] = useState();
    const [tempfile,setTempfile] = useState();
    let profile_preview = null;
    let formData = new FormData();
    let file;
    if(img.file !== ''){
        
      profile_preview = <img className='profile_preview' src={img.previewURL}></img>
    }
    const onChange = (e)=>{
      const {value} = e.target;
      
      setText(value)
     
  }
  const onClick=()=>{
    console.log(formData.get('file'))
   let json = JSON.stringify(text)
   console.log(json,typeof(json))
    Axios.post('http://localhost:8080/hestagram/contents/new',{contentTexf:text})
          .then(function (response){
           let url = response.data;
           console.log(url)
         
           let formData2 = new FormData();
        
           formData2.append('file',tempfile);
           console.log(formData2.get('file'),tempfile);
        
        
        fetch((url), {
          method: 'PUT',
              headers: { 'Content-Type': 'image/jpg', 'Content-Length': formData.size },
              mode:'cors',
              body: tempfile
        })
        console.log(formData2.data)
               
           
        
          })
          
  }

  
  
  
  // Send the binary data.
  // Since a File is a Blob, you can send it directly.
  
    const handleFileOnChange = (event) => {
        event.preventDefault();
        setTempfile(event.target.files[0]);
        let reader = new FileReader();
        file = event.target.files[0];
        reader.onloadend = () => {
          setImage({
            file : file,
            previewURL : reader.result //file contents 
          })
        
        }
        formData.append('file',tempfile);
        for (var pair of formData.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
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
        <div className="input">
                <div className ="input_title">글 내용</div>
                <input placeholder="username" id="id"onChange={onChange}></input>
        </div>
        <button onClick={onClick}>글쓰기</button>
        </>
    )
}
export default ContentsWrite;