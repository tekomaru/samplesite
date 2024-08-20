import Image from "next/image";
import React from "react";
import styles from "./ServiceSlider.module.css";
// オプションをインポートする
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// publicフォルダの画像
const images = [
  "/image_1.png",
  "/image_2.png",
  "/image_3.png"
];

export default function BasicSlider() {
   // ブレイクポイントに基づいて1つのスライドに表示するスライドの数を指定
  const slideSettings = {
    0: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={slideSettings} // slidesPerViewを指定
      slidesPerView={"auto"} // ハイドレーションエラー対策
      centeredSlides={true} // スライドを中央に配置
      loop={true} // スライドをループさせる
      speed={2000} // スライドが切り替わる時の速度
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }} // スライド表示時間
      navigation // ナビゲーション（左右の矢印）
      pagination={{
        clickable: true,
      }} // ページネーション, クリックで対象のスライドに切り替わる
      className={styles.slideWrapper}
    >
      {images.map((src: string, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            width={400}
            height={400}
            alt="Slider Image"
            sizes="(min-width: 1024px) 100vw, 60vw"
            className={styles.slideImage}
          />
        
        </SwiperSlide>

      ))}
    </Swiper>
  );
}