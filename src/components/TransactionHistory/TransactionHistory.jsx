import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transactionHistory}>

            <thead className={styles.thead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={styles.column} >
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        }).isRequired
    )
}