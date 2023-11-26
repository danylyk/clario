import Image from 'next/image';

import { List } from '@atoms/List';
import { Offer } from '@atoms/Offer';
import { Price } from '@atoms/Price';
import { Button } from '@atoms/Button';
import { ListItem } from '@atoms/ListItem';

import styles from '@molecules/styles/Plan.module.css';
import { useElementClasses } from '@hooks/useElementClasses';

export function Plan({className, ...props}) {
  const classes = useElementClasses();

  classes.add(styles.container);
  classes.add(className);

  return (
    <div className={classes.value} {...props}>
      <div className={styles.offer}>
        <Offer time={100} />
      </div>
      
      <Price price={2.99} currency="$" period="7 days" />
      
      <div className={styles.proposal}>
        <p className="text_4 text_bold text_center">What you get:</p>
        <List gap="xl">
          <ListItem gap="m">
            <Image
              width={20}
              height={20}
              alt='Protection'
              src="/icons/protection.svg"
            />
            <p className="text_5">Protection for 3 devices</p>
          </ListItem>
          <ListItem gap="m">
            <Image
              width={20}
              height={20}
              alt='Checkup'
              src="/icons/checkup.svg"
            />
            <p className="text_5">Anti-spy checkup</p>
          </ListItem>
          <ListItem gap="m">
            <Image
              width={20}
              height={20}
              alt='Limitless'
              src="/icons/limitless.svg"
            />
            <p className="text_5">Unlimited access to anti-spying tools</p>
          </ListItem>
          <ListItem gap="m">
            <Image
              width={20}
              height={20}
              alt='Help'
              src="/icons/help.svg"
            />
            <p className="text_5">24/7 help from security experts</p>
          </ListItem>
        </List>
      </div>
      
      <Button size="l">Try for $2.99</Button>
      
      <div className={styles.information}>
        <p className="text_8 text_center">By clicking above, you agree to try 7 days of Clario for $2.99 as a special offer. Your subscription will renew for $39.9/month every 2 months. Cancel anytime or manage your subscription in your Clario account.</p>
      </div>

      <List gap="l">
        <ListItem gap="m">
          <Image
            width={27}
            height={24}
            alt='Guarantee'
            src="/icons/money-back.svg"
          />
          <p className="text_7">30-day money-back guarantee</p>
        </ListItem>
        <ListItem gap="m">
          <Image
            width={24}
            height={24}
            alt='100k downloads'
            src="/icons/downloads.svg"
          />
          <p className="text_7">100.000 + downloads</p>
        </ListItem>
      </List>
    </div>
  );
}