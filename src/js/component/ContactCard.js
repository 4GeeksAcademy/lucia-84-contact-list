import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'

const ContactCard = ({ contact }) => {
  const { store, actions } = useContext(Context)

  const eliminarContacto = () => {
    console.log(contact)
    actions.deleteContact(contact.id);
  };

  return (


    <li className="list-group-item d-flex justify-content-center">
      <div className="d-flex align-items-center w-75" >

        <div className="col-md-3 d-flex justify-content-center">

          <img className="rounded-circle"
            src=""
            alt="Picture" />


        </div>

        <div className="d-flex col-md-6">
          <h4 className="card-title mb-1"> {contact.name} </h4>
          <p className="card-text mb-1"> {contact.address} </p>
          <p className="card-text mb-1"> {contact.phone} </p>
          <p className="card-text mb-1"> {contact.email} </p>

        </div>

        <div className="col-md-3 d-flex justify-content-end">
          <Link to={"/EditContacts/" + contact.id} className="btn btn-link p-0 me-3">
            <i class="fa-regular fa-pen-to-square"></i>
          </Link>


          <button type="button" data-bs-toggle="modal" data-bs-target={"#delete-contact-" + contact.id} >
            <i className="fa fa-trash fa-lg"></i>
          </button>

          {/* <!-- Modal --> */}
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={eliminarContacto}>I want to delete</button>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ContactCard