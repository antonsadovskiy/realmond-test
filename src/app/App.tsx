import { UsersList } from "../components/users-list";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <UsersList />
    </div>
  );
}

export default App;
