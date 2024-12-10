import css from './Profile.module.css';

export const ProfileMain = ({ name, image, tag, location }) => {
  return (
    <div className={css.profileMain}>
      <img src={image} alt="User avatar" className={css.image} />
      <p className={css.name}>{name}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};
