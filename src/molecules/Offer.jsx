import { useTimer } from '@hooks/useTimer';
import { useTimerFormat } from '@hooks/useTimerFormat';

import styles from '@molecules/styles/Offer.module.css';

export function Offer({duration, ...props}) {
  const time = useTimer(duration);
  const timer = useTimerFormat(time);

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
