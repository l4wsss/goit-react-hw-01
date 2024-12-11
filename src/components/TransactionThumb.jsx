import css from './TransactionHistory.module.css';

export const TransactionThumb = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <td className={css.firstData}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};
