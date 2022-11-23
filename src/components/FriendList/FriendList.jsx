import PropTypes from "prop-types";
import { FriendListItem } from "./FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

export const FriendList = ({ friends }) => {

    return (
        <ul className={styles.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    isOnline={isOnline}
                    name={name}
                    avatar={avatar}
                />
            ))}
        </ul>
    )

}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            avatar: PropTypes.any,
            isOnline: PropTypes.bool,
        })
    ).isRequired,
}