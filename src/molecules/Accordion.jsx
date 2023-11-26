import { AccordionItem } from '@atoms/AccordionItem';
import { useElementClasses } from '@hooks/useElementClasses';
import styles from '@molecules/styles/Accordion.module.css';

export function Accordion({items, className, ...props}) {
  const classes = useElementClasses();

  classes.add(styles.accordion);
  classes.add(className);

  return (
    <div className={classes.value} {...props}>
      {items.map((item, index) => (
        <AccordionItem key={index} step={index + 1} summary={item.summary}>
          <p className="text_5">{item.content}</p>
        </AccordionItem>
      ))}
    </div>
  );
}
