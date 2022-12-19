import './App.css';
import axios from 'axios';
import { useEffect,useState,useCallback } from 'react';
import {useDropzone} from 'react-dropzone'

const UserProfiles = ()=>{
  const [userProfiles,setUserProfiles]=useState([])
  const fetchUserProfiles=()=>{
    axios.get("http://localhost:8080/api/v1/user-profile").then((res)=>{
      console.log(res)
      const data = res.data
      setUserProfiles(data)
    })
  }
  useEffect((()=>{
    fetchUserProfiles()
  }),[])

  return (userProfiles.map((userProfile,index)=>{

    return (
      <div key={index}>
        {userProfile.userProfileId ? <img src={`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileId}/image/download`} alt="img"/> : null }
        <br/>
        <br/>
        <h1>{userProfile.username}</h1>
        <h1>{userProfile.userProfileId}</h1>
        <Dropzone userProfileId={userProfile.userProfileId}/>
        <br/>
    </div>
    )

  }))
}

function Dropzone({userProfileId}) {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    
    console.log(file)
    
    const formData=new FormData()
    formData.append("file",file)

    axios.post(`http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`,
    formData,
    {
      headers:{
        "Content-type":"multipart/form-data"
      }
    }).then(()=>{
      console.log("Image uploaded successfully")
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the image here ...</p> :
          <p>Drag 'n' drop profile image here, or click to select profile image</p>
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <UserProfiles/>
    </div>
  );
}

export default App;
