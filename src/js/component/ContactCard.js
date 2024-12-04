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


<li className= "list-group-item d-flex justify-content-center">
<div className= "d-flex" >

<div className= "d-flex justify-content-center">

<img className= "rounded" 
src="https://images.unsplash.com/photo-1687360440094-949b8fe71c8c?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
alt="Picture" />


</div>

<div className="d-flex col-md-6">
    <h4>First Name</h4>
    <p>Address</p>
    <p>Phone</p>
    <p>Email</p>
    
</div>

<div className= "col-md-3 d-flex justify-content-end">
<Link>
<i class="fa-regular fa-pen-to-square"></i>
</Link>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
<i class="fa-solid fa-trash"></i>
</button>

<!-- Modal -->
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
        <button type="button" class="btn btn-primary">Save changes</button>
    


        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
