import { ArrowButton } from '@/components/Button'
import { useRouter } from 'next/router'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const WorkHero = ({brand, categories = [], color = "", logo, banner, extraClass="", back="/", alt}) => {
    const router = useRouter()
  return (
    <div className={`brandpage-hero ${extraClass}`}>
        <div className="brandpage-hero-back">
            <ArrowButton link={back} direction='down' theme={color} />
        </div>
        <div className="container">
            <div className="brandpage-hero-container">
                <div className={`brandpage-hero-casestudy ${color}`}>Case Study</div>
                <h1 className={`brandpage-hero-title ${color}`}>
                    <div className="logo">
                        <Image alt={alt} width={500} height={400} quality={100}  src={logo} />
                    </div>
                    {brand}
                </h1>
                <div className="brandpage-hero-footer">
                    <ul className="brandpage-hero-categories">
                        {categories && categories.map((cat, i) => (
                            <motion.li key={`brandpage-li-${i}`}>
                                {cat}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export const OtherHero = ({title, brand, categories = [], color = "", logo = null, extraClass="", back="/"}) => {
    const router = useRouter()
  return (
    <div className={`brandpage-hero ${extraClass}`}>
        <div className="brandpage-hero-back">
            <ArrowButton link={back} direction='down' theme={color} />
        </div>
        <div className="container">
            <div className="brandpage-hero-container">
                <div className={`brandpage-hero-casestudy ${color}`}>{title}</div>
                <h1 className={`brandpage-hero-title ${color}`}>
                    {logo && <div className="logo">
                        <Image width={500} height={400} quality={100} src={logo} alt="" />
                    </div>}
                    {brand}
                </h1>
                <div className="brandpage-hero-footer">
                    <ul className="brandpage-hero-categories">
                        {categories && categories.map((cat, i) => (
                            <motion.li key={`brandpage-li-${i}`}>
                                {cat}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkHero