import { useTimer } from '@hooks/useTimer';
import styles from '@atoms/styles/Offer.module.css';

export function Offer({time, ...props}) {
  const timer = useTimer(time);

  return (
    <div className={styles.offer} {...props}>
      <div className={styles.offer_text}>Special offer valid for</div>
      <div className={styles.offer_text}>
        <span>{timer.value}</span>
        {timer.metric}
      </div>
    </div>
  );
}
