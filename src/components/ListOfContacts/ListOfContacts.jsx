import css from './ListOfContacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import trashIcon from '../../icons/trash.png';
import { deleteContact } from '../../redux/operations';

const ListOfContacts = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

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
          {items.map(({ id, name, phone }) => {
            return (
              <tr key={id} className={css.tr}>
                <td className={css.td}>{name}</td>
                <td className={css.td}>{phone}</td>
                <td className={css.td}>
                  {' '}
                  <button
                    type="button"
                    className={css.deleteBtn}
                    id={id}
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    <img src={trashIcon} alt="trash icon" width={16} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfContacts;
