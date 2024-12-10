import { TransactionThumb } from './TransactionThumb';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <table>
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
