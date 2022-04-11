import React from 'react'

const Id = () => {
  return (
    <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog ">
      <div className="modal-content Rectangle-accordion-content">
        <div className="modal-header Rectangle-accordion-header">
          <thead>
          <tr className="cr-button__text ">
          <th className="accordion-title-name">IDs</th>
        <th className="accordion-title-name">Title</th>
        <th className="accordion-title-name">Description</th>
        <th className="accordion-title-name">Category</th>
        <th className="accordion-title-name">Confidentiality</th>
        <th className="accordion-title-name">Integrity</th>
        <th className="accordion-title-name">Availability</th>
        <th className="accordion-title-name">Rating</th>
          </tr>
          </thead>
          
        </div>
        <div className="modal-header">
        <tbody>
 
    <tr className="cr-text ">
        <td className="accordion-title-name-black"> A5.1</td>
        <td className="accordion-title-name-black">ORG IT Staff</td>
        <td className="accordion-title-name-black">Risk of Ransomware attack</td>
        <td className="accordion-title-name-black">Personnel</td>
        <td className="accordion-title-name-black">H</td>
        <td className="accordion-title-name-black">H</td>
        <td className="accordion-title-name-black">L</td>
        <td className="accordion-title-name-black">H</td>
    </tr>

</tbody>
        </div>
        <div className="modal-body">
        <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div>
      </div>
      ...
      </div>
        <div className="modal-footer">
        </div>
      </div>
    </div>
  </div>
  )
}

export default Id