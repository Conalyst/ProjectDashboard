import React from 'react';
import {Button, InputGroup, Form} from "react-bootstrap";

const ManageButton = () => {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content Manage-listAdd-modal">
        <div className="modal-header Rectangle-top-modal">
          <h5 className="modal-title Add-New-Asset-modal" id="exampleModalLabel">Add New</h5>
          <button type="button" className="btn-close Top-Cancel" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body Rectangle-grey-box-modal">
        <Form>
            <div className="row g-2">
              <div className="column-form col-md">
                    <Form.Group className="mb-3">
                  <Form.Label className="Label">Title</Form.Label>
                  <Form.Control className="Frame-left" type="text" onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="Label">Availibility <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left" >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" id="exampleFormControlInput1">
                  <Form.Label className="Label">Integrity <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="Label">Confidentiality <span className="optional">Optional</span></Form.Label>
                  <Form.Select className="Frame-left">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </Form.Select>
                </Form.Group>
                </div>
                <div className="col-md">
                <Form.Group className="mb-3">
                  <Form.Label className="Label-right">Category</Form.Label>
                  <Form.Select className="Frame-right">
                    <option>Software</option>
                    <option>Data</option>
                    <option>Network</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="Label-right">Description</Form.Label>
                  <Form.Control className="Frame-desc" as="textarea" rows="9" name="address" onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
        <div className="modal-footer Rectangle-top-modal">
            <Button className="Button-Icon-done-modal" type="submit" onClick={() =>onAddAsset()}>
              Done
            </Button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ManageButton