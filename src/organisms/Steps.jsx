import { useElementClasses } from '@hooks/useElementClasses';
import { Step } from '@molecules/Step';

import styles from '@organisms/styles/Steps.module.css';

export function Steps({items, className, ...props}) {
  const classes = useElementClasses();

  classes.add(styles.accordion);
  classes.add(className);

  return (
    <div className={classes.value} {...props}>
      {items.map((item, index) => (
        <Step key={index} number={index + 1} summary={item.summary}>
          <p className="text_5">{item.content}</p>
        </Step>
      ))}
    </div>
  );
}
