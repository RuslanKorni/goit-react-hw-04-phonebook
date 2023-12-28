import React from 'react';
import { ListWrap, List, Paragraf } from './ContactList.styled';
import { Button } from 'components/FormList/FormList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ListWrap>
      {contacts.map(({ id, name, number }) => (
        <List key={id}>
          <Paragraf>{name}</Paragraf>
          <Paragraf>{number}</Paragraf>
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </List>
      ))}
    </ListWrap>
  );
};

export default ContactList;
