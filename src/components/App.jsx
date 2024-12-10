import { Profile } from './Profile';
import data from '../userData';
import { FriendList } from './FriendList';
import friends from '../friends.json';
import { TransactionHistory } from './TransactionHistory';
import transactions from '../transactions.json';

export default function App() {
  return (
    <>
      <Profile {...data[0]} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
