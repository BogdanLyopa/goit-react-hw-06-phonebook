import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

export default Filter;
