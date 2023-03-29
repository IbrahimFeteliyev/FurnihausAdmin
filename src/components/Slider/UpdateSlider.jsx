import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { BASE_URL } from '../../api/Config';

function UpdateSlider() {
  const [Title, setTitle] = useState("");
  const [PhotoUrl, setPhotoUrl] = useState("");
  const [Description, setDescription] = useState("");
  const [id, setID] = useState(null);
  const navigate = useNavigate();

  const updateSlider = async () => {
    fetch(`${BASE_URL}slider/update/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: Title,
        photoUrl : PhotoUrl,
        description : Description
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/slider");
      });
  }

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setTitle(localStorage.getItem('Title'));
    setPhotoUrl(localStorage.getItem('PhotoUrl'));
    setDescription(localStorage.getItem('Description'));
  }, []);




  return (
    <div className='container my-5'>
          <div className="col-lg-6 my-2">
            <TextField fullWidth id="outlined-basic" value={Title} variant="outlined" label="Slider title"   onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="col-lg-6 my-2">
            <TextField fullWidth id="outlined-basic" value={PhotoUrl} onChange={(e) => setPhotoUrl(e.target.value)} label="PhotoUrl" variant="outlined" />
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
              onClick={updateSlider}
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
  )
}

export default UpdateSlider