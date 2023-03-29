import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../api/Config";
import "../Blog/create.scss";
import { useDispatch, useSelector } from "react-redux";
import { getBlogAction } from "../../redux/Actions/BlogAction";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [image, setImage] = useState("");
  const { blogs } = useSelector((state) => state.blogs)
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const setData = (data) => {
    let { id, title, description, coverPhoto, image } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Title", title);
    localStorage.setItem("Description", description);
    localStorage.setItem("CoverPhoto", coverPhoto);
    localStorage.setItem("Image", image);
  };

  const onDelete = (id) => {
    fetch(`${BASE_URL}blog/remove/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        coverPhoto: coverPhoto,
        image: image,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate('/blog')
      });
  };

  useEffect(() => {
    dispatch(getBlogAction())
  }, []);

  return (
    <div className='container my-5'>
            <div className="row">
                <div className="col-lg-4 col-md-6 my-4">
                    <Link to="/blog/create">
                        <button className='btn btn-outline-success'>Create</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                {
                    blogs &&
                    blogs.map((e) => (
                        <div key={e.id} className="col-lg-3 my-2">
                            <div className="card">
                                <div className="card-body">
                                    <img width='100%' src={e.image} alt="" />
                                    <h5 className="card-title text-center">
                                        {e.title}
                                    </h5>
                                </div>
                                <div className="card-footer">
                                    <div className="row text-center">
                                        <div className="col-lg-6">
                                            <button className='btn btn-outline-danger w-100' onClick={() => onDelete(e.id)}>Delete</button>
                                        </div>
                                        <div className="col-lg-6">
                                            <Link to={`/blog/update/${e.id}`}>
                                                <button className='btn btn-outline-warning w-100' onClick={() => setData(e)}>Edit</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }




            </div>

        </div>
  );
};

export default Blog;