import React,{useState} from "react";
import './signup.css'
import Axios  from 'axios'

const Signup = () =>{
    // const [img ,setImage] = useState({file:null,previewURL:""});
    // const [uploadStatus,setUploadStatus] = useState(false);
    // const [tempfile,setTempfile] = useState();
    //let user = {id:'',password:'',nickname:'',email:"" ,name:'',phone:''}
    let user = { nickname: "haein",
    password: "asdfg",
    phone: "010-8929-4890",
    email: "ver.753@mail.com",
    name: "haneul",
    id: "vhonv"
    
}
    //const [user,setUser] = useState({userId:'',password:'',nickname:'',email:null ,location:null,company:null,introduction:null,imageUrl:""});
    const onClick= ()=>
    {
       console.log(user);
       
        Axios.post('http://localhost:8080/hestagram/join',user)
        
        
    }
    const onChange = (e)=>{
        const {id,value} = e.target;
       
        user[id] = value;
    }
    const goToHome=()=>{
        window.location=`/`
    }
    
    // const ImageClick = () =>{}
    // const handleFileOnChange = (event) => {
    //     event.preventDefault();
    //     setTempfile(event.target.files[0]);
    //     let reader = new FileReader();
    //     let file = event.target.files[0];
    //     reader.onloadend = () => {
    //       setImage({
    //         file : file,
    //         previewURL : reader.result //file contents 
    //       })
        
    //     }
        
    //     reader.readAsDataURL(file);
     
    //   }
    
    //   const ImageClick = async () => {
    //     let formData = new FormData();
        
    //     formData.append('file',tempfile);
    //     Object.keys(user).forEach(key=>formData.append(`${key}`,user[key]))
    //     return Axios.post("http://localhost:7000/auth/register", formData).then(res => {
            
    //         //setUser({...user,imageUrl:res.data.Location})
    //         //user.imageUrl=res.data.Location;
    //         console.log()
    //       }).catch(err => {
    //         alert('실패')
    //       })
    //     // const config = {
    //     //     bucketName: process.env.REACT_APP_BUCKET_NAME,
    //     //     region: process.env.REACT_APP_REGION,
    //     //     accessKeyId: process.env.REACT_APP_ACCESS_ID,
    //     //     secretAccessKey: process.env.REACT_APP_ACCESS_KEY,};

    //     // const ReactS3Client = new S3(config);
    //     // ReactS3Client.uploadFile(file)
    //     // 서버의 upload API 호출
    //    // const res = await axios.post("/api/upload", formData);
    //     //console.log(res);
    //   }
    //   let profile_preview = null;
    // if(img.file !== ''){
        
    //   profile_preview = <img className='profile_preview' src={img.previewURL}></img>
    // }
    return(
        
        <div className="registerForm">
          
        {/* <input 
        className="image"
        type='file' 
                accept='image/jpg,image/png,image/jpeg,image/gif' 
                name='profile_img' 
                onChange={handleFileOnChange}>
                
        </input> 
        {profile_preview} */}

            <div className="input">
                <div className ="input_title">ID : </div>
                <input placeholder="username" id="id"onChange={onChange}></input>
            </div>
            <div className="input">
                <div className ="input_title">password : </div>
                <input placeholder="password" id="password"onChange={onChange}></input>
            </div><div className="input">
                <div className ="input_title">nickname : </div>
                <input placeholder="nickname" id="nickname"onChange={onChange}></input>
            </div><div className="input">
                <div className ="input_title">email : </div>
                <input placeholder="email" id="email"onChange={onChange}></input>
            </div>
            <div className="input">
                <div className ="input_title">phone : </div>
                <input placeholder="phone" id="phone"onChange={onChange}></input>
            </div>
            <div className="input">
                <div className ="input_title">name : </div>
                <input placeholder="phone" id="name"onChange={onChange}></input>
            </div>

        <button onClick={onClick}>sign up</button>
        {/* <button onClick={ImageClick}>홈화면으로</button> */}
        </div>
    )
}
export default Signup;
