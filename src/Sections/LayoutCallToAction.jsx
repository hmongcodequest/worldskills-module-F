
"use client"
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/LayoutCallToAction.css";

import Cover from "/images/cover.jpg"
import CoverLow from "/images/cover-low-res.jpg"

export const LayoutCallToAction = () => {

    const [imageMedia, setImageMedia] = useState(false);
    useEffect(() => {
        const ReSize = () => {
            const media = window.innerWidth;
            if (media < 768) {
                setImageMedia(true);
            } else {
                setImageMedia(false);
            }
        }
        ReSize();
        window.addEventListener('resize', ReSize);
        return ()=>{
            window.removeEventListener('resize', ReSize);
        };
    }, []);

    const handleBtn = (e)=>{
        const btn = document.querySelector('#button');
        const x = e.pageX - btn.offsetLeft - 10;
        const y = e.pageY - btn.offsetTop - 50;
        btn.style.setProperty('--x',x+"px");
        btn.style.setProperty('--y',y+"px");
    }
    return (
        <>
            <section className="layout-call-to-action" tabIndex={2}>
                <img tabIndex={2} src={imageMedia ? Cover : CoverLow} alt="A beautiful city at night" />
                <button type="button" tabIndex={2} id="button" alt="Call to action" onMouseMove={(e)=>handleBtn(e)} >
                    <span>Call to action</span>
                </button>
            </section>
        </>
    )
}