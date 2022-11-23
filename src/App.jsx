import { Profile } from "./components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import { Section } from "components/Section/Section";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";


export const App = () => {
  return (
    <>
      <Section title={"Task 1 - Social network profile"}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={"Task 2 - Statistics"}>
        <Statistics
          title="Upload stats"
          stats={data} />

      </Section>
      <Section title={"Task 3 - Friends list"}>
        <FriendList
          friends={friends} />
      </Section>
      <Section title="Task 4 - Transaction history">
        <TransactionHistory items={transactions} />
      </Section>
    </>
  )
}
