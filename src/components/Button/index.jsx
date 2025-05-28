import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const LayeredButton = ({id = '', link = "#", action = console.log(""), text}) => {
  return (
    <>
    {action ? (
      <motion.div
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{duration: 1, type: 'spring', bounce: 0.4}}
      whileHover={{scale: 0.95}}
      key={`text-button-${Math.random()}`}
      id={id}
      onClick={action} className="button-box">
          <div className="button-box-background">
              <div className="button-box-background-layers">
                  <div className="button-box-background-layer" />
                  <div className="button-box-background-layer" />
                  <div className="button-box-background-layer" />
              </div>
          </div>
          <div className="button-box-texts">
              <span className="button-box-texts-top">{text}</span>
              <span className="button-box-texts-bottom">{text}</span>
          </div>
      </motion.div>
    ):(
      <Link href={link} id={id}>
      <motion.div
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{duration: 1, type: 'spring', bounce: 0.4}}
      whileHover={{scale: 0.95}}
      key={`text-button-${link}}`}
      className="button-box">
          <div className="button-box-background">
              <div className="button-box-background-layers">
                  <div className="button-box-background-layer" />
                  <div className="button-box-background-layer" />
                  <div className="button-box-background-layer" />
              </div>
          </div>
          <div className="button-box-texts">
              <span className="button-box-texts-top">{text}</span>
              <span className="button-box-texts-bottom">{text}</span>
          </div>
      </motion.div>
      </Link>
    )}
    </>
  )
}

export const FormButton = ({id = '', key, action = console.log(""), text}) => {
  return (
      <motion.div
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{duration: 1, type: 'spring', bounce: 0.4}}
      whileHover={{scale: 0.95}}
      key={key}
      onClick={action} className="button-box">
          <div className="button-box-background">
              <div className="button-box-background-layers">
                  <div className="button-box-background-layer" />
                  <div className="button-box-background-layer" />
                  <div className="button-box-background-layer" />
              </div>
          </div>
          <div className="button-box-texts">
              <span className="button-box-texts-top">{text}</span>
              <span className="button-box-texts-bottom">{text}</span>
          </div>
      </motion.div>
  )
}

export const BorderedButton = ({link = "#", action = null, text, invert=false}) => {
  return (
  <>
  {
    action ? (
    <div onClick={() => action} className="button-box bordered">
      <div className={`button-box-texts ${invert ? 'odinvert' : ''}`}>
          <span className="button-box-texts-top">{text}</span>
          <span className="button-box-texts-bottom">{text}</span>
      </div>
    </div>
    ):( 
    <motion.div
    key={`nav-contact-btn${link}`}
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.4}}
    >
      <Link href={link} className="button-box bordered">
      <div className={`button-box-texts ${invert ? 'odinvert' : ''}`}>
          <span className="button-box-texts-top">{text}</span>
          <span className="button-box-texts-bottom">{text}</span>
      </div>
    </Link>
    </motion.div>
  )
  }
  </>
  )
}

export const ArrowButton = ({arrowColor = '', link, direction = 'down', theme = 'dark'}) => {
  return (
    <Link href={link} className="button-arrow">
      <div className={`button-arrow-container ${arrowColor} ${theme}`}>
        <i className={`bx bx-${direction}-arrow-alt static`}></i>
        <i className={`bx bx-${direction}-arrow-alt hover`}></i>
      </div>
    </Link>
  )
}

export const ArrowButtonAction = ({link = '', action = console.log(""), direction = 'down', theme = 'dark'}) => {
  return (
    <>
    {link ? (
      <Link href={link} className="button-arrow">
      <div className={`button-arrow-container ${theme}`}>
        <i className={`bx bx-${direction}-arrow-alt static`}></i>
        <i className={`bx bx-${direction}-arrow-alt hover`}></i>
      </div>
    </Link>
    ):(
      <div onClick={action} className="button-arrow">
      <div className={`button-arrow-container ${theme}`}>
        <i className={`bx bx-${direction}-arrow-alt static`}></i>
        <i className={`bx bx-${direction}-arrow-alt hover`}></i>
      </div>
    </div>
    )}
    </>
  )
}

export default LayeredButton