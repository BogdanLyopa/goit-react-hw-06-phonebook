import ContactsListItem from './ContactsListItem/ContactsListItem';

const ContactsList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <ContactsListItem key={contact.id} {...contact} onRemove={onRemove} />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
