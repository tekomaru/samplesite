// /**
//  * 
//  * OpenPosition
//  * 
//  * @param props
//  * @returns
//  */

// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useCallback } from "react";
// import { Props } from "react-modal";
// import styles from './OpenPosition.module.css'
// import { RECRUIT } from "../../../constants/recruit";
// import PositionModal from "../PositionModal/PositionModal";

// export const OpenPosition = (props : Props) => {
//     const {} = props;
//     const [isOpenModal, setIsOpenModal] = useState(false);
//     const [position, setPosition] = useState<{
//         titile: string;
//         description: string;
//         image: string;
//         requiredSkills: string[];
//         welcomeSkills: string[];
//     }>({
//         titile:'',
//         description: '',
//         image: '',
//         requiredSkills: [],
//         welcomeSkills: [],
//     });


//     const openPositionEmployee = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
//         setPosition(RECRUIT.EMPLOYEE);
//         openModal(e);
//     }
//     const openPositionPotential = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
//         setPosition(RECRUIT.POTENTIAL);
//         openModal(e);
//     };
//     const openPositionIntern = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
//         setPosition(RECRUIT.INTERN);
//         openModal(e);
//     };

//     const closeModal = useCallback(() => {
//         setIsOpenModal(false);
//         document.removeEventListener('click', closeModal);
//     },[]);

//     useEffect(() => {
//         return () => {
//             document.removeEventListener('click', closeModal);
//         };
//     }, [closeModal]);

//     const openModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
//         setIsOpenModal(true);
//         document.addEventListener('click',closeModal);
//         e.stopPropagetion();
//     };


//         <div className={styles.OpenPosition_wrapper} id="openPosition">
//             <div className={styles.Headline_headline}>
//                 <div className={styles.Headline_mainHeadline}>Open Position</div>
//                 <span>募集ポジション</span>
//             </div>
//             <div className={styles.OpenPosition_positionWrapper}>
//                 <div onClick={(e) => openPositionEmployee(e)}
//                     className={`${styles.OpenPosition_positionBox} animate__animated animate__fadeInUp`}>
//                     <img src="/img/recruit/rightUpArrow.png" alt=""　/>
//                         <div className={styles.OpenPosition_positionContent}>
//                             <h3>中途採用</h3>
//                             <span>employee</span>
//                         </div>
//                     </div>
//                     <div 
//                     onClick={(e) => openPositionPotential(e)}
//                     className={`${styles.OpenPosition_positionBox} animate__animated animate__fadeInUp`}>
//                     <img src="/img/recruit/rightUpArrow.png" alt="" />
//                         <div className={styles.OpenPosition_positionContent}>
//                             <h3>ポテンシャル採用</h3>
//                             <span>potential</span>
//                         </div>
//                     </div>
//                     <div 
//                     onClick={(e) => openPositionIntern(e)}
//                     className={`${styles.OpenPosition_positionBox} animate__animated animate__fadeInUp`}>
//                     <img src="/img/recruit/rightUpArrow.png" alt="" />
//                         <div className={styles.OpenPosition_positionContent}>
//                             <h3>インターン</h3>
//                             <span>intern</span>
//                         </div>
//                     </div>
//                 </div>

//                 {isOpenModal &&(
//                     <PositionModal position={position} closeModal={() => setIsOpenModal(false)} />
//                 )}
//             </div>
//             )
//                 }

