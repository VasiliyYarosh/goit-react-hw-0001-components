import s from './transactionhistory.module.scss';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    return (
      <div className={s.wrapper}>
        <table className={s.transactionHistory}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map(items => (
              <tr key={items.id} className={s.list}>
                <td className={s.item}>{items.type}</td>
                <td className={s.item}>{items.amount}</td>
                <td className={s.item}>{items.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};