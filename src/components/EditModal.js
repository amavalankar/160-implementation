import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { useState } from 'react';

export default function EditModal(props) {
    // item's reference in Cloud Firestore DB.
    const [itemRef, setItemRef] = useState('');
    // const [itemName, setItemName] = useState('');
    // const [dailyLimit, setDailyLimit] = useState(0);
    // const [personLimit, setPersonLimit] = useState(0);
    // const [stock, setStock] = useState(0);
    // const [inStock, setInStock] = useState(false);
    // const [showModal, setShowModal] = useState(false);

    return (
        <div className={`modal fade ${props.showModal ? 'show d-block' : ''}`} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Item</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.onClose}></button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>

                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder={props.itemName} />
                  <label htmlFor="floatingInput">Item Name</label>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="dailyLimit" placeholder={props.dailyLimit} />
                      <label htmlFor="floatingInput">Limit Per Day</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="personalLimit" placeholder={props.personLimit} />
                      <label htmlFor="floatingInput">Limit Per Person (Optional)</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control" id="stock" placeholder="" />
                      <label htmlFor="floatingInput">Stock</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="inStock">In stock</label>
                      <input className="form-check-input" type="checkbox" id="inStock" value={props.inStock} />
                    </div>
                  </div>
                </div>

                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.onClose}>Close</button>
                <button type="button" className="btn btn-primary" onClick={props.onClose}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
    );
}


