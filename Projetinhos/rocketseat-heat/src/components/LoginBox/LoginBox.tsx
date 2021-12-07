import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';

const LoginBox = () => {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem </strong>
      <a href='#' className={styles.signInWithGithub}>
        <VscGithubInverted />
        Entrar com github
      </a>
    </div>
  );
};

export default LoginBox;
