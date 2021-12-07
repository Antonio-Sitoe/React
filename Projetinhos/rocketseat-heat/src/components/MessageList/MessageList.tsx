import styles from './styles.module.scss';
import Logo from '../../assets/Logo';
const MessageList = () => {
  return (
    <div className={styles.messageList}>
      <Logo />
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            non consequuntur obcaecati enim esse, aut neque accusantium fugit,
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src='https://github.com/antonio-sitoe.png'
                alt='antoniositoe'
              />
            </div>
            <span>Diego Fernandes</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            non consequuntur obcaecati enim esse, aut neque accusantium fugit,
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src='https://github.com/antonio-sitoe.png'
                alt='antoniositoe'
              />
            </div>
            <span>Diego Fernandes</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src='https://github.com/antonio-sitoe.png'
                alt='antoniositoe'
              />
            </div>
            <span>Diego Fernandes</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MessageList;
