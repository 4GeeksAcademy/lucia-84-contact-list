import React from "react";
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Context } from '../store/appContext'

const AddContact = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const {actions,store} = useContext(Context)
    const guardarContacto = (e)=> {

e.preventDefault()

actions.createContact(name,phone,email,address)
    }
return (


    <div className="container">
    {/* <h1 className="text-center">{!id ? "Add a New Contact" : `Editing Contact: ${name}`}</h1> */}

    <form className="container" onSubmit={guardarContacto}>

        <div className="mb-3">
            <label htmlFor="formGroupExampleInput1" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Full name" onChange={(e) => setName(e.target.value)} value={name} required />

        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput3" className="form-label">Phone</label>
            <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} value={phone} required />
        </div>
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput4" className="form-label">Address</label>
            <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)} value={address} required />
        </div>
        <div className="mb-3">
            <button type="submit" className="btn btn-primary" >Save</button>
        </div>
    </form>

    <Link to="/">volver a contactos</Link>
</div>
)


}

export default AddContact