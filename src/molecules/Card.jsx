import Image from 'next/image';
import { useElementClasses } from '@hooks/useElementClasses';

import { List } from '@atoms/List';
import { ListItem } from '@atoms/ListItem';
import { Poster } from '@atoms/Poster';

import styles from '@molecules/styles/Card.module.css';

export function Card({title, description, list, color, height = 372, className, children, ...props}) {
  const classes = useElementClasses();

  classes.add(styles.card);
  classes.add(className);

  return (
    <div className={classes.value} {...props}>
      <Poster className={styles.poster} color={color} height={height}>
        {children}
      </Poster>
      <h3 className="text_center">{title}</h3>
      <p className="text_4 text_center">{description}</p>
      <List className={styles.list} gap="l">
        {list.map((item, index) => (
          <ListItem gap="m" key={index}>
            <Image
              width={24}
              height={24}
              alt=""
              src={item.icon}
            />
            <p className="text_5 text_bold">{item.text}</p>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
