import React from 'react'
import virat from "../../assets/brands/rcb/virat.jpg"
import image1 from "../../assets/brands/oneplus/campaign1/pic1.jpg"
import image2 from "../../assets/brands/gamyam/cover.jpg"
import ayatana from "../../assets/brands/ayatana/pic1.jpg"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Image from 'next/image'

const SolHero = () => {
    
    return (
        <div className="solutions-hero">
            <div className="solutions-hero-images">
                <MouseParallaxContainer className="solutions-hero-images-container" globalFactorX={0.1} globalFactorY={0.1}>
                    <MouseParallaxChild className="solutions-hero-images-1"  factorX={-0.3} factorY={-0.5}><Image width={500} height={400} quality={100} src={image1.src} alt="" /></MouseParallaxChild>
                    <MouseParallaxChild className="solutions-hero-images-2" factorX={-0.7} factorY={-0.8}><Image width={500} height={400} quality={100} src={image2.src} alt="" /></MouseParallaxChild>
                    <MouseParallaxChild className="solutions-hero-images-3" factorX={-0.5} factorY={-0.6}><Image width={500} height={400} quality={100} src={virat.src} alt="" /></MouseParallaxChild>
                    <MouseParallaxChild className="solutions-hero-images-4" factorX={-0.6} factorY={-0.4}><Image width={500} height={400} quality={100} src={ayatana.src} alt="" /></MouseParallaxChild>
                </MouseParallaxContainer>
            </div>
            <div className="container solutions-hero-head">
                <h1>what we do</h1>
                <h3>We craft <span className='yellow'>immersive digital experiences</span> for <span className="teal">forward-thinking companies</span></h3>
            </div>
        </div>
    )
}

export default SolHero