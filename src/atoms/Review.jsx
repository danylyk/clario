import Image from 'next/image';
import { useElementClasses } from '@hooks/useElementClasses';
import styles from '@atoms/styles/Review.module.css';

export function Review({company, client, color, shade, alt = '', children, ...props}) {
  const clientClasses = useElementClasses();

  clientClasses.add(styles.client);
  clientClasses.add('text_4');

  const style = {
    '--color': color,
    '--shade': shade,
  };

  return (
    <div className={styles.container} style={style} {...props}>
      <div className={styles.company}>
        <Image
          height={25}
          width={25}
          src={company}
          alt={alt}
        />
      </div>
      {children}
      <div className={clientClasses.value}>
        {client}
      </div>
    </div>
  );
}
