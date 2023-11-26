import styles from '@templates/styles/SectionPurple.module.css';

export function SectionPurple({children, ...props}) {
  return (
    <section className={styles.section} {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}