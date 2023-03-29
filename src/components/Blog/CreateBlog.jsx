import React, { useState } from "react";
import "../Blog/create.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createBlogAction } from '../../redux/Actions/BlogAction';
import { Button, TextField } from '@mui/material';

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createBlog = () => {
    dispatch(createBlogAction(title,image,coverPhoto,description))
    navigate("/blog")
  }

  return (
    <div className='container my-5'>
      <div className="col-lg-6 my-53">
        <TextField required fullWidth id="outlined-basic" onChange={(e) => setTitle(e.target.value)} label="Title" variant="outlined" />
      </div>
      <div className="col-lg-6 my-3">
        <TextField required fullWidth id="outlined-basic" onChange={(e) => setImage(e.target.value)} label="Image" variant="outlined" />
      </div>
      <div className="col-lg-6 my-3">
        <TextField required fullWidth id="outlined-basic" onChange={(e) => setCoverPhoto(e.target.value)} label="CoverPhoto" variant="outlined" />
      </div>
      <div className="col-lg-6 my-3">
        <TextField required fullWidth id="outlined-basic" onChange={(e) => setDescription(e.target.value)} label="Description" variant="outlined" />
      </div>
      <div className="row">
        <div className="col-lg-6 my-2">
          <Button
            fullWidth
            variant="contained"
            component="label"
            color='success'
            onClick={() => createBlog()}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
