import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "../ReviewsList/ReviewsList.module.css";
import { ReviewsPeople } from "../ReviewsPeople/ReviewsPeople";

export function SwiperConfig({ reviews }) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      className={styles.swiperContainer}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <ReviewsPeople
            name={review.name}
            role={review.role}
            photoUrl={review.photoUrl}
            testimonial={review.testimonial}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
