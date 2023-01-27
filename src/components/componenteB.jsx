import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../functions/contact.js'

const ContactComponent = ({ contact }) => {
  return (
    <div>
        <h2>
            Nombre: { contact.name }
        </h2>
        <h3>
            Apellido: { contact.lastname }
        </h3>
        <h4>
            Email: { contact.email }
        </h4>
        <h5>
            Estado: { contact.conect ? 'CONTACTO EN LINEA' : 'CONTACTO NO DISPONIBLE' }
        </h5>
    </div>
  );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent;
