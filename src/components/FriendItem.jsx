import css from './FriendList.module.css';
import clsx from 'clsx';

export const FriendItem = ({ friend }) => {
  return (
    <div className={css.list}>
      <img src={friend.avatar} alt="Avatar" width="48" className={css.image} />
      <p className={css.name}>{friend.name}</p>
      <p className={clsx(css.status, friend.isOnline ? css.green : css.red)}>
        {friend.isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
