
import React from "react"

function AddItem(props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Edit Item</h3>
          <div className="form-group mt-3">
            <label>Item Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Item Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Price</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter price"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Modify
            </button>
          </div>
          
        </div>
      </form>
    </div>
  )
}

export default AddItem;