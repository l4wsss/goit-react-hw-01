import { Profile } from './Profile';
import data from '../userData';

export default function App() {
  return (
    <>
      <Profile {...data[0]} />
    </>
  );
}
