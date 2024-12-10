import { FriendItem } from './FriendItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.container}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};
