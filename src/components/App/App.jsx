import Profile from '../Profile/Profile';
import 'modern-normalize';
import userData from '../../assets/userData.json';
import FriendList from '../FriendList/FriendList'
import friends from '../../assets/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../assets/transactionHistory.json';




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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
