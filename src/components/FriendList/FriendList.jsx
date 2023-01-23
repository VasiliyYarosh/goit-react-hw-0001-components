import s from './FriendList.module.scss';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendsList = ({ friends }) => {
  return (
    <div className={s.wrapper}>
      {friends.map(friends => (
        <ul className={s.list}>
          <FriendListItem friends={friends} />
        </ul>
      ))}
    </div>
  );
};

export default FriendsList;

