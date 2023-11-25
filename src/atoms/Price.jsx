import styles from '@atoms/styles/Price.module.css';

export function Price({price, currency, period, ...props}) {
  const [priceMajor, priceMinor] = price.toFixed(2).split('.');

  return (
    <div className={styles.container} {...props}>
      <div className={styles.price}>
        <div className={styles.price_currency}>{currency}</div>
        <div className={styles.price_major}>{priceMajor}</div>
        <div className={styles.price_minor}>{priceMinor}</div>
      </div>
      <div className={styles.period}>/{period}</div>
    </div>
  );
}
