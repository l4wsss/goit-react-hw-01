import { ProfileMain } from './ProfileMain';
import { ProfileList } from './ProfileList';
import css from './Profile.module.css';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <div className={css.thumb}>
      <div>
        <ProfileMain
          name={username}
          image={avatar}
          tag={tag}
          location={location}
        />
      </div>

      <ul>
        <ProfileList stats={stats} />
      </ul>
    </div>
  );
};
