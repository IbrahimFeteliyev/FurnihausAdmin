import { Button, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { createSliderAction } from '../../redux/Actions/SliderAction';

function CreateSlider() {
    const [title, setTitle] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createSlider = () => {
        dispatch(createSliderAction(title,photoUrl,description))
        navigate("/slider")
      }
 


    return (
        <div className='container my-5'>
          <div className="col-lg-12 my-3">
            <TextField required  fullWidth id="outlined-basic" onChange={(e) => setTitle(e.target.value)} label="Title" variant="outlined" />
          </div> 
          <div className="col-lg-12 my-3">
            <TextField required  fullWidth id="outlined-basic" onChange={(e) => setPhotoUrl(e.target.value)} label="PhotoUrl" variant="outlined" />
          </div>
          <div className="col-lg-12 my-3">
            <TextField required  fullWidth id="outlined-basic" onChange={(e) => setDescription(e.target.value)} label="Description" variant="outlined" />
          </div>
        <div className="row">
          <div className="col-lg-12  my-2">
            <Button
              fullWidth
              variant="contained"
              component="label"
              color='success'
              onClick={() => createSlider()}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    )
}

export default CreateSlider