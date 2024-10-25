import Profile from '../Profile/Profile';
import 'modern-normalize';
import userData from '../../assets/userData.json';
// import FriendList from '../FriendList';
// import friends from '../../assets/friends.json';




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
      {/* <FriendList friends ={friends}/> */}
    </div>
  );
};

export default App;
