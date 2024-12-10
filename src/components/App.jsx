import { Profile } from './Profile';
import data from '../userData';
import { FriendList } from './FriendList';
import friends from '../friends.json';
import { TransactionHistory } from './TransactionHistory';
import transactions from '../transactions.json';
import clsx from 'clsx';
import css from './App.module.css';

export default function App() {
  return (
    <div className={clsx(css.main)}>
      <Profile className={css.profile} {...data[0]} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
