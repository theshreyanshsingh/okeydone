import Background from '@/components/Background'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ScrollContainer from '@/components/ScrollContainer'
import { fetchClients } from '@/controller/Content'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React, {useState} from "react"
import rcb from "../../assets/brands/rcb/cover.jpg"
import oneplus from "../../assets/brands/oneplus/campaign1/main1.jpg"
import ayatana from "../../assets/brands/ayatana/cover2.jpg"
import bcp from "../../assets/brands/bcp/cover.jpg"
import { LoaderScreen } from '@/utilities'
import Image from 'next/image'

export default function Work() {
  const router = useRouter()
  const [filterOpen, setFilterOpen] = useState(false)
  const {filter} = router.query
  return (
    <>
      <Head>
        <title>Work | Okay Done </title>
        <meta name="description" content="We empower brands with impactful campaigns, from influencer marketing, performance marketing to social media marketing that helps businesses to stand out." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoaderScreen />
      <main className={"main"}>
        <Background />
        <Navigation />
        <ScrollContainer>
          <div className="work-hero">
            <div className="container">
              <div className="work-hero-header">
                <h1>discover our</h1>
                <h1>latest work</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="work-box">
              <Link href="/work/royal-challengers-bangalore" className="work-box-item">
                <Image width={800} height={600} quality={100} src={rcb.src} alt="" />
                <div className="work-box-item-content">
                  <h1>Royal Challengers Bangalore</h1>
                  <ul className="work-box-item-content-categories">
                    <li>Social Media</li>
                    <li>Performance Marketing</li>
                  </ul>
                  <h2 className="work-box-item-content-title">Empowering an <span>epic fan moment</span> through powerful social media showmanship</h2>
                </div>
              </Link>
              <Link href="/work/oneplus" className="work-box-item">
                <Image width={800} height={600} quality={100} src={oneplus.src} alt="" />
                <div className="work-box-item-content">
                <h1>OnePlus</h1>
                  <ul className="work-box-item-content-categories">
                    <li>Influencer Marketing</li>
                  </ul>
                  <h2 className="work-box-item-content-title">Creative influencer campaign for the most successful smartphone brand in India</h2>
                </div>
              </Link>
              <Link href="/work/ayatana" className="work-box-item">
                <Image width={800} height={600} quality={100} src={ayatana.src} alt="" />
                <div className="work-box-item-content">
                <h1>Ayatana, Coorg</h1>
                  <ul className="work-box-item-content-categories">
                    <li>Social Media</li>
                    <li>Performance Marketing</li>
                  </ul>
                  <h2 className="work-box-item-content-title">Adopting new-age strategies to build India&apos;s most popular luxury resort</h2>
                </div>
              </Link>
              <Link href="/work/bengaluru-city-police" className="work-box-item">
                <Image width={800} height={600} quality={100} src={bcp.src} alt="" />
                <div className="work-box-item-content">
                <h1>Bengaluru City Police</h1>
                  <ul className="work-box-item-content-categories">
                    <li>Social Media</li>
                  </ul>
                  <h2 className="work-box-item-content-title">Empowering the Bengaluru City Police in fighting crimes through <span>recent, relevant & relatable</span> content.</h2>
                </div>
              </Link>
            </div>
          </div>
          <Footer />
        </ScrollContainer>
      </main>
    </>
  )
}


/**********   
 * 
 * 
<div>{/* <ul className="work-filter-list d-only">
                <motion.li
                key={"filter1"}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: 'spring', bounce: 0.4, delay: 0.5}}
                >
                  <Link className={!filter ? "active" : ""} href={"/work"}>All</Link>
                </motion.li>
                <motion.li
                key={"filter2"}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: 'spring', bounce: 0.4, delay: 0.6}}
                >
                  <Link className={filter === "socialmedia" ? "active" : ""} href={"/work?filter=socialmedia"}>Social Media</Link>
                </motion.li>
                <motion.li
                key={"filter3"}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: 'spring', bounce: 0.4, delay: 0.7}}
                >
                  <Link className={filter === "webdev" ? "active" : ""} href={"/work?filter=webdev"}>Web Development</Link>
                </motion.li>
                <motion.li
                key={"filter4"}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: 'spring', bounce: 0.4, delay: 0.8}}
                >
                  <Link className={filter === "media" ? "active" : ""} href={"/work?filter=media"}>Media</Link>
                </motion.li>
                <motion.li
                key={"filter5"}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: 'spring', bounce: 0.4, delay: 0.9}}
                >
                  <Link className={filter === "performance" ? "active" : ""} href={"/work?filter=performance"}>Performance Marketing</Link>
                </motion.li>
            </ul> */
            /* <button className={`work-filter-list-button ${filterOpen ? "active" : ""}`}
            onClick={() => setFilterOpen(!filterOpen)}
            >
              {filterOpen ? <i class="fa-solid fa-xmark"></i> : "Filter"}
            </button> */
            /* <ul className="work-filter-list m-only" style={{"--scale": filterOpen ? 1 : 0}}>
                <motion.li
                key={"filter1"}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: 'spring', bounce: 0.4, delay: 0.5}}
                >
                  <Link className={!filter ? "active" : ""} href={"/work"}>All</Link>
                </motion.li>
                <motion.li
                key={"filter2"}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: 'spring', bounce: 0.4, delay: 0.6}}
                >
                  <Link className={filter === "socialmedia" ? "active" : ""} href={"/work?filter=socialmedia"}>Social Media</Link>
                </motion.li>
                <motion.li
                key={"filter3"}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: 'spring', bounce: 0.4, delay: 0.7}}
                >
                  <Link className={filter === "webdev" ? "active" : ""} href={"/work?filter=webdev"}>Web Development</Link>
                </motion.li>
                <motion.li
                key={"filter4"}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: 'spring', bounce: 0.4, delay: 0.8}}
                >
                  <Link className={filter === "media" ? "active" : ""} href={"/work?filter=media"}>Media</Link>
                </motion.li>
                <motion.li
                key={"filter5"}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: 'spring', bounce: 0.4, delay: 0.9}}
                >
                  <Link className={filter === "performance" ? "active" : ""} href={"/work?filter=performance"}>Performance Marketing</Link>
                </motion.li>
            </ul> */