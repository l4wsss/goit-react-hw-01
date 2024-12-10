import css from './Profile.module.css';

export const ProfileList = ({ stats: { followers, views, likes } }) => {
  return (
    <div className={css.profileList}>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </div>
  );
};
