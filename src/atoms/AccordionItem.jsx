import { AccordionButton } from '@atoms/AccordionButton';
import { AccordionPanel } from '@atoms/AccordionPanel';
import styles from '@atoms/styles/AccordionItem.module.css';

export function AccordionItem({step, summary, children, ...props}) {
  return (
    <div className={styles.details} {...props}>
      <AccordionButton>
        <div className={styles.summary}>
          <div className={styles.step}>{step}</div>
          <div className="text_4">{summary}</div>
          <div className={styles.arrow}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path className={styles.fill} fillRule="evenodd" clipRule="evenodd" d="M11.6237 16.9268C11.5033 16.878 11.3905 16.8048 11.2929 16.7071C11.2929 16.7071 11.2929 16.7071 11.2929 16.7071L5.2929 10.7071C4.90238 10.3166 4.90238 9.68345 5.2929 9.29293C5.68343 8.9024 6.31659 8.9024 6.70712 9.29293L12 14.5858L17.2929 9.2929C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68341 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.4142 17 11.9849 17.0733 11.6237 16.9268Z"/>
            </svg>
          </div>
        </div>
      </AccordionButton>
      <AccordionPanel>
        <div className={styles.content}>
          {children}
        </div>
      </AccordionPanel>
    </div>
  );
}
