import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
      <div className="row">
        <div className="col-lg-4 my-2">
              <div className="card">
                <Link to='/product' style={{textDecoration: "none"}}>
                  <div className="card-body">
                    <h3 className="card-title text-center my-5">
                      Product
                    </h3>
                  </div>
                </Link>
              </div>
        </div>
        <div className="col-lg-4 my-2">
          <div className="card">
                <Link to='/category' style={{textDecoration: "none"}}>
                  <div className="card-body">
                    <h3 className="card-title text-center my-5">
                      Category
                    </h3>
                  </div>
                </Link>
          </div>
        </div>
        <div className="col-lg-4 my-2">
          <div className="card">
            <Link to='/blog' style={{textDecoration: "none"}}>
              <div className="card-body">
                <h3 className="card-title text-center my-5">
                  Blog
                </h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 my-2">
          <div className="card">
            <Link to='/order' style={{textDecoration: "none"}}>
              <div className="card-body">
                <h3 className="card-title text-center my-5">
                  Order
                </h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 my-2">
          <div className="card">
            <Link to='/slider' style={{textDecoration: "none"}}>
              <div className="card-body">
                <h3 className="card-title text-center my-5">
                  Slider
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Dashboard