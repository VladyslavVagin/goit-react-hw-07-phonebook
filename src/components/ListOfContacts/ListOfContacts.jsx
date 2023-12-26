import css from './ListOfContacts.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import trashIcon from '../../icons/trash.png'

const ListOfContacts = () => {
  const contacts = useSelector(selectContacts);


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
        {contacts.map(({id, name, phone}) => {
          return ( 
            <tr key={id} className={css.tr}>
               <td className={css.td}>{name}</td>
               <td className={css.td}>{phone}</td>
               <td className={css.td}> <button
                type="button"
                className={css.deleteBtn}
                id={id}
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
