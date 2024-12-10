export const ProfileMain = ({ name, image, tag, location }) => {
  return (
    <>
      <img src={image} alt="User avatar" />
      <p>{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </>
  );
};
