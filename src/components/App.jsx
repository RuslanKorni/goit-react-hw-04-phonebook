import React, { Component } from 'react';
import initialContacts from './data/contacts.json';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormList from './FormList/FormList';
import GlobalTitle from './Layout/Title';
import ContactList from './ContatList/ContactList';
import Filter from './Filter/Filter';

const notifyOptions = {
  position: 'bottom-left',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

componentDidMount () {
  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);
  if(parsedContacts) {
    this.setState({
      contacts: parsedContacts
    })
  }
}; //! В цоьому компоненті життєвого циклю я можу прочитати дані з локального сховіща

  componentDidUpdate (prevProps, prevState ) {
const {contacts} = this.state;
if(contacts !== prevState.contacts) {
localStorage.setItem('contacts', JSON.stringify(contacts));
}
  }

  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    const isAdded = this.state.contacts.some(el => el.name.toLowerCase() === normalizedName);
    // let isAdded = false;
    // this.state.contacts.some(el => {
    //   if (el.name.toLowerCase() === normalizedName) {
    //    return isAdded = true;
    //   }
    // });

    if (isAdded) {
      return toast.error(`${name}: is already in contacts`, notifyOptions);
    }
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <GlobalTitle title="Phoneook" />
        <FormList onSubmit={this.addContact}/>
        <GlobalTitle title="Contacts" />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDelete={this.deleteContacts}
        />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
 