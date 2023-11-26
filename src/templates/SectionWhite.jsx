import styles from '@templates/styles/SectionWhite.module.css';

export function SectionWhite({children, ...props}) {
  return (
    <section className={styles.section} {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}