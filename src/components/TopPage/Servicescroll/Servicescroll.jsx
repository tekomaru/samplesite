'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Servicescroll.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Servicescroll() {
    const WorksRightList01 = useRef(null);
    const WorksRightList02 = useRef(null);
    const WorksRightList03 = useRef(null);
   
    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: '#works__item__01',
      start: 'top top',
      endTrigger: '#works__item__02',
      end: 'center center',
      markers:true
    }),
    ScrollTrigger.create({
        trigger: '#works__item__02',
        start: 'top top',
        endTrigger: '#works__item__03',
        end:'center center',
       
        }
      ),
      ScrollTrigger.create({
        trigger: '#works__item__03',
        start: 'top top',
        endTrigger: '#works__item__04',
        end:'center center',
     
        }
      )});

  return (
    <div>
      <section class="works" id="works">
    <div class="works__inner" id="works-inner-js">
      <div class="works__contents">

        <div class="works__scroll__bar" data-scroll-target="#works-inner-js"></div>

        <div class="works__left">
          <div class="works__left__list">
            <article className={styles.works__left__item} ref={ WorksRightList01}>
              <h3 class="fade-up-ttl">テスト投稿Works01<br />
              <span>Worksテスト</span>
              </h3>
            </article>
            <article className={styles.works__left__item} ref={ WorksRightList02}>
              <h3 class="fade-up-ttl">テスト投稿Works02<br />
                <span>Worksテスト</span>
                </h3>
            </article>
            <article className={styles.works__left__item} ref={ WorksRightList03}>
              <h3 class="fade-up-ttl">テスト投稿Works03<br />
                <span>Worksテスト</span>
                </h3>
            </article>
          
          </div>
        </div>

        <div class="works__right">
          <div id="works__right__js" data-scroll-target="#works-inner-js">
            <div class="works__right__inner">
              <ul class="works__right__gallery">
                <li id="works__right__list1" className={styles.top__img}><Image src="/image_1.png" alt=""  width={300} height={300}/></li>
                <li id="works__right__list2" className={styles.top__img}><Image src="/image_2.png" alt=""  width={300} height={300} /></li>
                <li id="works__right__list3" className={styles.top__img}><Image src="/image_3.png" alt=""   width={300} height={300}/></li>
               
              </ul>                
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}