'use client';
import React, { useState, useLayoutEffect, useRef} from 'react'
import styles from './Locomotive.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const projects = [
    {
        title: "エンジニアリング支援",
        text:"システムの構築に関する コンサルティング、設計、開発、運用を行います。",
        src: "salar_de_atacama.jpg"
    },
    {
        title: "Web広告運用支援",
        text:"デジタル広告の領域での専門知識と経験を活かし、効果的な広告キャンペーンの設計と最適化を支援します。",
        src: "valle_de_la_muerte.jpeg"
    },
    {
        title: "自社サービスの企画、開発",
        text:"自社サービスの企画、開発も行っております。",
        src: "miscani_lake.jpeg"
    }
]

export default function Locomotive() {

    const [selectedProject, setSelectedProject] = useState(0);
    // const container = useRef();
    // const imageContainer = useRef();    
    
    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: styles.scrollimageContainer,
            pin: true, 
            start:'center center',
            end: document.body.offsetHeight-window.innerHeight -100 ,
            markers:true,
           
            // triggerOnce: true,
          })
          
    }, {})
    
   
    return (
        <div className={styles.projects}>
            <div className={styles.projectDescription}>
                <div className={styles.scrollimageContainer}>
                    <Image
                        class={"image_pin"}
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true} />
                </div>
                <div className={styles.column}>
                    <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
                </div>
                <div className={styles.column}>
                    <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
                </div>
            </div>

            <div className={styles.projectList}>
            {
                    projects.map( (project, index) => {
                        return <div key={index} onScroll={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <div className={styles.projectbox}>
                            <h2>{project.title}</h2>
                       <p>{project.text}</p>
                        </div></div>
                    })
                }
            </div>
        </div>
    )
}

