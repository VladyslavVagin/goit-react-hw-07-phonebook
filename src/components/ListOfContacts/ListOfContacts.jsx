import css from './ListOfContacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/contactsSlice';
import trashIcon from '../../icons/trash.png';

const ListOfContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.query)); 

  return (
    <div className={css.tableContainer}>
      <table className={css.table}>
        <thead>
           <tr>
            <th className={css.th}>Name</th>
            <th className={css.th}>Phone</th>
            <th className={css.th}>Remove</th>
           </tr>
        </thead>
        <tbody className={css.tbody}>
        {filteredContacts.map(({id, name, number}) => {
          return ( 
            <tr key={id} className={css.tr}>
               <td className={css.td}>{name}</td>
               <td className={css.td}>{number}</td>
               <td className={css.td}> <button
                type="button"
                className={css.deleteBtn}
                id={id}
                onClick={() => dispatch(deleteUser(id))}
              >
                <img src={trashIcon} alt='trash icon' width={16}/>
              </button></td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfContacts;
