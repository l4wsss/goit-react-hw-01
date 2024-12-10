export const FriendItem = ({ friend }) => {
  return (
    <>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p>{friend.name}</p>
      <p>{friend.isOnline ? 'Online' : 'Offline'}</p>
    </>
  );
};
