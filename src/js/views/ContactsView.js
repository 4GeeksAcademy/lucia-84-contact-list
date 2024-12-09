import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import ContactCard from "../component/ContactCard";

const ContactsView = () => {

    const { store, actions } = useContext(Context)
    // console.log(store.listContact)

    return (

        <div className="text-center mt-5">
        <h1 className="display-1 text-primary mb-5">
            Contact List
            <i className=""></i>
        </h1>
        <Link to="/addcontact">
            <button className="btn btn-primary mb-5">
                <i className="me-2"></i>
                Add contact
            </button>
        </Link>


        <ul className="list-group">
        {store.listContact.map((contact, index) => {
                    return (
                        <ContactCard contact={contact} key={index} />
                    )
                })}
        </ul>			
    </div>
    )
};
export default ContactsView;