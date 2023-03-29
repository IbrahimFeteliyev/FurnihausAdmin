import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../api/Config';


const UpdateBlog = () => {
  const [Title, setTitle] = useState("");
  const [Image, setImage] = useState("");
  const [CoverPhoto, setCoverPhoto] = useState("");
  const [Description, setDescription] = useState("");
  const [id, setID] = useState(null);
  const navigate = useNavigate();

  const updateBlog = async () => {
    fetch(`${BASE_URL}blog/update/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: Title,
        image: Image,
        coverPhoto: CoverPhoto,
        description: Description,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/blog");
      });
  }

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setTitle(localStorage.getItem('Title'));
    setImage(localStorage.getItem('Image'));
    setCoverPhoto(localStorage.getItem('CoverPhoto'));
    setDescription(localStorage.getItem('Description'));
  }, []);



  return (
    <div className='container my-5'>
      <div className="col-lg-6 my-2">
        <TextField fullWidth id="outlined-basic" value={Title} onChange={(e) => setTitle(e.target.value)} label="Title" variant="outlined" />
      </div>
      <div className="col-lg-6 my-2">
        <TextField fullWidth id="outlined-basic" value={Image} onChange={(e) => setImage(e.target.value)} label="Image" variant="outlined" />
      </div>
      <div className="col-lg-6 my-2">
        <TextField fullWidth id="outlined-basic" value={CoverPhoto} onChange={(e) => setCoverPhoto(e.target.value)} label="CoverPhoto" variant="outlined" />
      </div>
      <div className="col-lg-6 my-2">
        <TextField fullWidth id="outlined-basic" value={Description} onChange={(e) => setDescription(e.target.value)} label="Description" variant="outlined" />
      </div>
      <div className="row">
        <div className="col-lg-6 my-2">
          <Button
            fullWidth
            variant="contained"
            component="label"
            color='success'
            onClick={updateBlog}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UpdateBlog