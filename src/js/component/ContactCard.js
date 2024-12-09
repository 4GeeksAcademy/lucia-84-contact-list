import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from '../store/appContext'

const ContactCard = ({ contact }) => {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    const {id} = useParams()
    console.log ("Este es el id", id)
    return (

        <li>
            <div className="row ">
                <div className="col-3"></div>
                <div className="col-6 text-center">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-3 mt-3">
                                <img
                                    id="imgContact"
                                    src=""
                                    className="img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body text-start">
                                    <h5 className="card-title">{contact.name}</h5>
                                    <p className="card-text mb-0 text-secondary">
                                        <i className="bi bi-geo-alt-fill me-1"></i>
                                        {contact.address}
                                    </p>
                                    <p className="card-text mb-0 text-secondary">
                                        <small className="text-body-secondary">
                                            <i className="bi bi-telephone-fill me-1"></i>
                                            {contact.phone}
                                        </small>
                                    </p>
                                    <p className="card-text text-secondary">
                                        <small className="text-body-secondary">
                                            <i className="bi bi-envelope-fill me-1"></i>
                                            {contact.email}
                                        </small>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <button
                                    className="me-5"
                                    onClick={() => {
                                        // actions.contactindividual(contact);
                                        navigate(`/editContact/${contact.id}`);
                                    }}
                                >
                                    Editar Contacto
                                </button>
                                x

                                < i className="bi bi-trash-fill" data-bs-toggle="modal" data-bs-target={`#deleteModal${contact.id}`}></i >
                                <div className="modal" id={`deleteModal${contact.id}`} tabIndex="-1">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Are you sure?</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>If you delete this contact, it desappear for ever!</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                                                <button type="button" className="btn btn-primary" onClick={
                                                    () => {
                                                        actions.deleteContact(contact.id)
                                                    }
                                                } data-bs-dismiss="modal">Yes</button>
                                            </div>
                                        </div>
                                    </div>
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