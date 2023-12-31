import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ContactItem, ContactName, ContactNumber, Button } from './ContactListItem.styled'


export const ContactListItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
  
    const handleDeleteContact = userId => {
      dispatch(deleteContact(userId));
    };
  
    return (
      <ContactItem key={id}>
        <ContactName>
          {name}: <ContactNumber>{number}</ContactNumber>
        </ContactName>
        <Button onClick={() => handleDeleteContact(id)}>Delete</Button>
      </ContactItem>
    );
  };
  
  ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };