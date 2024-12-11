import { TransactionThumb } from './TransactionThumb';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={css.container}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <TransactionThumb item={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
