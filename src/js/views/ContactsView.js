import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import ContactCard from "../component/ContactCard";

const ContactsView = () => {

    const { store, actions } = useContext(Context)
    console.log(store.listContacts)

    return (

        <div className="w-75 mx-auto">
            <div className="d-flex justify-content-end">
                <Link to="/AddContact">
                    <button className="btn btn-success">Add New contact</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.listContact.map((contact, index) => {
                    return (
                        <ContactCard contact={contact} key={index} />
                    )
                })}
            </ul>
        </div>
    );
};
export default ContactsView;