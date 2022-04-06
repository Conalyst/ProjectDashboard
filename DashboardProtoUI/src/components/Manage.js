import React from 'react'

const Manage = () => {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content Manage-listAdd">
        <div className="modal-header Rectangle-add-new-asset">
          <h5 className="modal-title" id="exampleModalLabel">Add New Asset</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body Rectangle-form-grey">
          <div>Title</div>
            <div className="Frame-form">
            </div>
            <div className="label">Availabiliy <span className="optional">Optional</span></div>
            <div className="Frame-form">
            <select class="form-select" aria-label="Default select example">
              <option selected></option>
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>

            </div>
            <div className="label">Integrity <span className="optional">Optional</span></div>
            <div className="Frame-form">
            <select class="form-select" aria-label="Default select example">
              <option selected></option>
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>

            </div>
            <div className="label"> Confidentiality <span className="optional">Optional</span></div>
            <div className="Frame-form">
            <select class="form-select" aria-label="Default select example">
              <option selected></option>
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>

          </div>
          <div className="label"> Category </div>
            <div className="Frame-form">
            <select class="form-select" aria-label="Default select example">
              <option selected></option>
              <option value="1">Software</option>
              <option value="2">Data</option>
              <option value="3">Network</option>
            </select>

          </div>
            
            
               Form

        </div>
        <div className="modal-footer">
          <button type="button" className="Button-Icon-Manage">Done</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Manage