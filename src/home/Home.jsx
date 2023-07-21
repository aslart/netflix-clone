import Featured from '../components/featured/Featured';
import List from '../components/list/List';
import Navbar from '../components/navbar/Navbar';
import './home.scss';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured type="Movie" />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
