import React from 'react';
import { Contact } from '../functions/contact.js'
import ContactComponent from './componenteB.jsx'

const ListContact = () => {

    const defaultContact = new Contact('Fede', 'Loaiza', 'fede@hotmail.com', false);

  return (
    <div>
        <div>
            Tus contactos:
        </div>
        <ContactComponent contact={ defaultContact }></ContactComponent>
    </div>
  );
};

export default ListContact;
