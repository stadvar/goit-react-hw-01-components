import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => {
  //   console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(el => (
        <FriendListItem
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
