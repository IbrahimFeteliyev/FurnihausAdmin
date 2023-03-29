import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../api/Config';
import { getSliderAction } from '../../redux/Actions/SliderAction';

function Slider() {
    const [title, setTitle] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [description, setDescription] = useState("");
    const { sliders } = useSelector((state) => state.sliders)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setData = (data) => {
        let { id, title, photoUrl, description } = data;
        localStorage.setItem("ID", id);
        localStorage.setItem("Title", title);
        localStorage.setItem("PhotoUrl", photoUrl);
        localStorage.setItem("Description", description);
    };

    const onDelete = (id) => {
        fetch(`${BASE_URL}slider/remove/${id}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                photoUrl: photoUrl,
                description: description
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                navigate('/slider')
            });
    };

    useEffect(() => {
        dispatch(getSliderAction())
    }, [])

    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-lg-4 col-md-6 my-4">
                    <Link to="/slider/create">
                        <button className='btn btn-outline-success'>Create</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                {
                    sliders &&
                    sliders.map((e) => (
                        <div key={e.id} className="col-lg-3 my-2">
                            <div className="card">
                                <div className="card-body">
                                    <img width='100%' src={e.photoUrl} alt="" />
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
                                            <Link to={`/slider/update/${e.id}`}>
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
    )
}

export default Slider