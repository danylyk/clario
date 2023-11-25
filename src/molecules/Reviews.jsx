import { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import { Review } from '@atoms/Review';

import 'swiper/css';
import styles from '@molecules/styles/Reviews.module.css';

export function Reviews({items, ...props}) {
  return (
    <Swiper
      className={styles.slider}
      spaceBetween={12}
      slidesPerView={'auto'}
      centeredSlides={true}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      {...props}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <Review company={item.company} client={item.client} color={item.color} shade={item.shade}>
            <p className="text_4 text_bold">
              {item.content.split('\n').map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))}
            </p>
          </Review>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}