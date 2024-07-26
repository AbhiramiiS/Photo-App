import React from 'react'
import navbar from'./navbar'
const search = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 ol-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 ol-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Enter title to be searched</label>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 ol-xl-12 col-xxl-12"><button className="btn btn-primary">Search</button>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default search
