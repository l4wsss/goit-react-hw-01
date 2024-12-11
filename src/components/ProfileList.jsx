import css from './Profile.module.css';

export const ProfileList = ({ stats: { followers, views, likes } }) => {
  return (
    <div className={css.profileList}>
      <li>
        <span>Followers</span>
        <span>
          <b>{followers}</b>
        </span>
      </li>
      <li>
        <span>Views</span>
        <span>
          <b>{views}</b>
        </span>
      </li>
      <li>
        <span>Likes</span>
        <span>
          <b>{likes}</b>
        </span>
      </li>
    </div>
  );
};
