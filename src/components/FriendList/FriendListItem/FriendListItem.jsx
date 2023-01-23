import s from './frendlist-item.module.scss';
import PropTypes from 'prop-types';

const FriendListItem = ({ friends }) => {
  return (
    <li className={s.item}>
      {friends.isOnline ? (
        <span className={s.isOnline}></span>
      ) : (
        <span className={s.ofline}></span>
      )}
      <img className={s.avatar} src={friends.avatar} alt="аватар" width="70" />
      <p className={s.name}>{friends.name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
