import { AccordionItem } from '@atoms/AccordionItem';
import styles from '@molecules/styles/Accordion.module.css';

export function Accordion({items, ...props}) {
  return (
    <div className={styles.accordion} {...props}>
      {items.map((item, index) => (
        <AccordionItem key={index} step={index + 1} summary={item.summary}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
