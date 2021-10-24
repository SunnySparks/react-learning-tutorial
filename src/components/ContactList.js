import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler}/>
        );
    });
    return (
        <div className="main">
            <h2>
                Contact List
                <Link to="/add">
                    <button className="ui button blue right">Add Contact</button>
                </Link>
            </h2>
            <div className='ui celled list contactCont'>
                {renderContactList}
            </div>
        </div>
    );
};

export default ContactList;