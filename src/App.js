import './App.css';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './jsons/user.json';
import statisticalData from './jsons/statistical-data.json';
import friends from './jsons/friends.json';
import transactions from './jsons/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <hr />
      <Statistics title="Upload stats" stats={statisticalData} />
      <hr />
      <Statistics stats={statisticalData} />
      <hr />
      <FriendList friends={friends} />
      <hr />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
