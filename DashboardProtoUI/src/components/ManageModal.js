import React ,  { useState, useEffect } from 'react';
import {Button, InputGroup, Form} from "react-bootstrap";
import {
  postAsset
} from "../services/assetsService";
const ManageModal = () => {
  const [assetTitle, setAssetTitle] = useState("");
  const [description,setDescription] = useState("");
  const [errors, setErrors] = useState(""); 

const onAddAsset = () =>{
 
if (!assetTitle) {
  setErrors("A asset title is needed!");
} else {
  var requestDto = {
    title: assetTitle,
    description:description,
     categoryId: 2
  };
  postAsset(requestDto)
    .then((result) => {
      setAssetTitle("");
      setDescription("")
      // getCommentByRestaurant(restaurantId).then((result) => {
      //   setCommentsListData(result);
      // });
      setErrors("This asset created successfully !");
    })
    .catch((err) => {
      console.log(err);
      if (err.response.status == 404) {
        setErrors("No comment found!");
      } else {
        if (err.response.status == 400) {
          setErrors("restaurantId is not valid!");
        } else {
          setErrors("Unknow error!");
        }
      }
    });
}
}

  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content Manage-listAdd-modal">
        <div className="modal-header Rectangle-top-modal">
          <h5 className="modal-title Add-New-Asset-modal" id="exampleModalLabel">Add New Asset</h5>
          <button type="button" className="btn-close Top-Cancel" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body Rectangle-grey-box-modal">
        <Form>
            <div className="row g-2">
              <div className="column-form col-md">
                    <Form.Group className="mb-3">
                  <Form.Label className="Label">Title</Form.Label>
                  <Form.Control className="Frame-left"
                   type="text" 
                   value={assetTitle} 
                   onChange={(e) => setAssetTitle(e.target.value)}
                   />
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
          <p className="login-error"style={errors ? {visibility: "visible", color: "red"}: null} >{errors}</p>
    
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

export default ManageModal