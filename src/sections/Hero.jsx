import LayeredButton, { ArrowButton, ArrowButtonAction } from '@/components/Button';
import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { ImagesSlider } from '@/components/ui/images-slider';

export const TextLine = ({text, middle}) => {
  return (
    <div className="hero-header-lines">
      {text.split("").map((letter, i) => 
        <motion.div
        initial={{x: 150, opacity: 0}}
        animate={{x: 0, opacity:1}}
        transition={{duration: 1, delay: 2.5+0.05*i, type: 'spring', bounce: 0.6}}
        className='hero-header-lines-line'
        key={`hero-header-line-letter-i${Math.random()}`}>
          {letter}
        </motion.div>
      )}
      {middle && <div className='hero-header-lines-middle'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>}
    </div>
  )
}

const Hero = ({data}) => {
  const [ww, setWw] = useState(true)
  useEffect(() => {
    const media = window.innerWidth
    if(media > 768){
      setWw(true)
    }else{
      setWw(false)
    }
  },[])
  return (
    <section className="hero">
      <motion.div
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{duration: 1.5, delay: 1, type: 'spring', bounce: 0.4}}
      className="hero-video">
        <Tilt
        style={{
          width: '100vw', 
          height: '100vh', 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center'}}
        transitionSpeed={700}
        transitionEasing={"ease"}
        perspective={1000}
        trackOnWindow={false}>
        <video
        autoPlay={true}
        controls={false}
        loop={true}
        muted={true}
        playsInline={true}
        src={data.video.url} />
        <div className="hero-video-overlay" />
        </Tilt>
      </motion.div>
      <h1 className="hero-header">
        <motion.div
        key={"hero-top-context-text"}
        initial={{x: 150, opacity: 0}}
        animate={{x: ww ? -100 : 0, opacity: 1}}
        transition={{duration: 2, delay: 2, type: 'spring', bounce: 0.6}}
        className='hero-header-context'>{data.subTitle}</motion.div>
        <TextLine text={data.title.split(" ")[0]} />
        <TextLine text={data.title.split(" ")[1]} middle={true} />
        <TextLine text={data.title.split(" ")[2]} />
      </h1>
      <motion.div
      key={"hero-btn-what-we-do"}
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{duration: 1.5, delay: 3, type: 'spring', bounce: 0.6}}
      className="hero-cta">
        <LayeredButton link={`/${data.ctaLink}`} text={data.ctaText} />
      </motion.div>
      <div className="hero-down">
        <ArrowButtonAction link={'#clients'} direction='down' theme='dark' />
      </div>
    </section>
  )
}

export const HeroSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const [slides, setSlides] = useState([])
  useEffect(() => {
    setSlides(images.map((img, i) => {
      return {
        img,
        title: `slide title here for slide ${i+1}`,
        ctaText: 'CTA Text Here',
        ctaLink: '/solutions'
      }
    }))
  },[])

  return (
    <div className='hero nobp'>
      <ImagesSlider className="h-[100svh]" direction='burn' images={images} slides={slides} />
      <div className="hero-down">
        <ArrowButtonAction link={'#clients'} direction='down' theme='dark' />
      </div>
    </div>
  )
}

export default Hero