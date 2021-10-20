import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log('props', props);
    console.log('contacts', props.contacts);

    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} />
        );
    });
    return (
        <div className='ui celled list'>
            {renderContactList}
        </div>
    );
};

export default ContactList;