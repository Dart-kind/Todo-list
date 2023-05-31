import styles from './ProgressBar.module.scss';

const ProgressBar = ({ value }) => {

  return (
    <div className={styles.content__progress}>
      <div style={{ width: `${value}%` }} className={styles.content__done}>
        <span>{value}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
