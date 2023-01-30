import s from './FriendList.module.scss';
import FriendListItem from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => {
  return (
    <div className={s.wrapper}>
      {friends.map(friends => (
        <ul key={friends.id} className={s.list}>
          <FriendListItem friends={friends} />
        </ul>
      ))}
    </div>
  );
};

export default FriendsList;


FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
