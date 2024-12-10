import { ProfileMain } from './ProfileMain';
import { ProfileList } from './ProfileList';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <div>
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
