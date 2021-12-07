import styles from './App.module.scss';
import LoginBox from './components/LoginBox/LoginBox';
import MessageList from './components/MessageList/MessageList';

const App = () => {
  return (
    <div className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </div>
  );
};

export default App;
