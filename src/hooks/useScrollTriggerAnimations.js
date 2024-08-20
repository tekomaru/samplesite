// import { useEffect } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// const useScrollTriggerAnimations = (ref) => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     if (ref.current) {
//       const scroller = ".site__main__contents";
//       const elements = ref.current.querySelectorAll('[id^="works__item__"]');

//       elements.forEach((elem, index) => {
//         const nextElem = elements[index + 1];
//         const target = document.getElementById(`works__right__list${index + 1}`);

//         ScrollTrigger.create({
//           trigger: elem,
//           start: 'top top',
//           endTrigger: nextElem ? nextElem : elem,
//           end: nextElem ? 'center center' : 'bottom+=100% bottom',
//           scroller: scroller,
//           toggleClass: { targets: target, className: 'js-active' },
//         });
//       });
//     }

//     // クリーンアップ関数
//     return () => {
//       ScrollTrigger.getAll().forEach(instance => instance.kill());
//     };
//   }, [ref]);
// };

// export default useScrollTriggerAnimations;