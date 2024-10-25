import Profile from '../Profile';
import './App.css';
import 'modern-normalize';
import userData from '../../assets/userData.json';
import FriendList from '../FriendList';
import friends from '../../assets/friends.json';




const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};

export default App;
