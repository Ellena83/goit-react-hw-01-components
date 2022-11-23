import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <li className={styles.item} >
            <span className={isOnline ? styles.online : styles.offline}>{isOnline}</span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}