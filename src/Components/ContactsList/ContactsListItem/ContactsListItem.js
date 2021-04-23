import styles from './ContactsListItem.module.css';

const ContactsListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={styles.item}>
      {name} : {number}
      <button className={styles.button} onClick={() => onRemove(id)}>
        Remove
      </button>
    </li>
  );
};

export default ContactsListItem;
