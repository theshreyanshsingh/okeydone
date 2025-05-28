import Background from '@/components/Background'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ScrollContainer from '@/components/ScrollContainer'
import { LoaderScreen } from '@/utilities'
import Head from 'next/head'
import Image from 'next/image'
import ClientsHero from './ClientsHero'
// import { Tooltip } from 'react-tooltip'
import {motion} from "framer-motion"

const images = [
  {img:'rcb-logo.png', name: 'Royal Challengers Bangalore', color: '#FFFFFF'},
  {img:'bcp-logo.png', name: 'Bangalore City Police', color: '#ffdb8d'},
  {img:'btp-logo.png', name: 'Bangalore Traffic Police', color: '#c8fff6'},
  {img:'google-logo.png', name: 'Google', color: '#FFFFFF'},
  {img:'white/ceat-logo.png', name: 'Ceat', color: '#FFFFFF'},

  {img:'healthcare-global-logo.png', name: 'Healthcare Global', color: '#FFFFFF'},
  {img:'godrej-logo.png', name: 'Godrej', color: '#FFFFFF'},
  {img:'heineken-logo.png', name: 'Heineken', color: '#FFFFFF'},
  {img:'oneplus-logo.png', name: 'OnePlus', color: '#FFFFFF'},
  {img:'white/clear-trip-logo.png', name: 'Clear Trip', color: '#FFFFFF'},

  {img:'white/bira-logo.png', name: 'Bira', color: '#ffbdbd'},
  {img:'pernod-logo.png', name: 'Pernod Ricard', color: '#FFFFFF'},
  {img:'lll-logo.png', name: 'The Live Love Laugh Foundation', color: '#FF9066'},
  {img:'startup-karnataka-logo.png', name: 'Startup Karnataka', color: '#FFFFFF'},
  {img:'motilal-logo.png', name: 'Motilal Oswal', color: '#FFFFFF'},

  
  {img:'ayatana-logo.png', name: 'Ayatana Coorg', color: '#c8fff6'},
  {img:'jain-logo.png', name: 'Jain Group', color: '#FFFFFF'},
  {img:'steppin-out-logo.png', name: 'Steppinout', color: '#FFFFFF'},
  {img:'itbt-logo.png', name: 'ITBT', color: '#FFFFFF'},
  {img:'nrai-logo.png', name: 'NRAI', color: '#FFFFFF'},
  

  {img:'gamyam-logo.png', name: 'Gamyam Retreat', color: '#FFFFFF'},
  {img:'sunday-soul-logo.png', name: 'Sunday Soul Sante', color: '#FFFFFF'},
  {img:'white/ksfa-logo.png', name: 'Karnataka State Football Association', color: '#FFFFFF'},
  {img:'rcb-cafe-logo.png', name: 'RCB Bar&Cafe', color: '#FFFFFF'},
  {img:'white/badmaash-logo.png', name: 'Badmaash', color: '#000000'},

  {img:'multifit-logo.png', name: 'Multifit', color: '#FFFFFF'},
  {img:'white/aratt-logo.png', name: 'Aratt Group', color: '#FFFFFF'},
  {img:'white/gawky-goose-logo.png', name: 'Gawky Goose', color: '#1A34AD'},
  {img:'bharat-hospital-logo.png', name: 'Bharath Hospitals', color: '#FFFFFF'},
  {img:'white/longboat-logo.png', name: 'Longboat Brewing Co', color: '#ffdb8d'},

  {img:'white/le-square-logo.png', name: 'Little Earth Square', color: '#FFFFFF'},
  {img:'cintacor-logo.png', name: 'Cintacor Island Resort', color: '#FFFFFF'},
  {img:'earl-secret-logo.png', name: 'Earl\'s Secret', color: '#FFFFFF'},
  {img:'destiny-logo.png', name: 'Destiny Farm Resort', color: '#ffdb8d'},
  {img:'kings-cliff-logo.png', name: 'Kings Cliff Ooty', color: '#FFFFFF'},

  {img:'hangover-logo.png', name: 'Hangover', color: '#000000'},
  {img:'white/nevermind-logo.png', name: 'Nevermind', color: '#000000'},
  {img:'hammered-logo.png', name: 'Hammered Bar and Kitchen', color: '#FFFFFF'},
  {img:'pebble-logo.png', name: 'Pebble', color: '#FF9066'},
  {img:'white/mangifera-logo.png', name: 'Mangifera, Bandipur', color: '#ffdb8d'},
  
  {img:'white/fat-unicorn.png', name: 'Fat Unicorn', color: '#FFFFFF'},
  {img:'white/azora-logo.png', name: 'Azora by Ayatana', color: '#1A34AD'},
  {img:'area-83-logo.png', name: 'Area 83', color: '#000000'},
  {img:'sherlock-logo.png', name: 'Sherlock\'s Inn', color: '#000000'},
  {img:'white/arena-logo.png', name: 'Arena', color: '#FFFFFF'},
  
  
  {img:'angrezi-logo.png', name: 'Angrezi', color: '#ffdb8d'},
  {img:'white/chapter-one-logo.png', name: 'Chapter One', color: '#000000'},
  {img:'briggs-beer-logo.png', name: 'Briggs Beer', color: '#FFFFFF'},
  {img:'white/la-cave-logo.png', name: 'LaCave', color: '#FFFFFF'},
  {img:'hello-pub-logo.png', name: 'Hello Pub', color: '#000000'},
]

export default function ClientsGrid() {
  return (
    <>
      <Head>
        <title>Best Digital Marketing Agency In Bengaluru: Okay Done</title>
        <meta name="description" content="Okay Done is one bangalore's top agencies, that focuses on millennial marketing methods to help brands and organizations reach their optimum potential in the digital space." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoaderScreen />
      <main className={"main"}>
        <Background />
        <Navigation />
        <ScrollContainer>
            <ClientsHero />
              <div className="container">
              <div className="clientsgrid-container">
                {images.map((img, i) => 
                  <motion.div
                  initial={{opacity: 0, scale: 0}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{delay: 3+0.04*i, duration: 0.3}}
                  key={i}
                  // style={{backgroundColor: img.color}}
                  className="clientsgrid-container-item">
                    <Image
                    // data-tooltip-id="my-tooltip" 
                    // data-tooltip-content={img.name}
                    // data-tooltip-place="bottom"
                    alt={img.name}
                    className='h-[10px]'
                    src={`/clients/${img.img}`} width={180} height={180} quality={100} />
                  </motion.div>
                )}
              </div>
              </div>
            {/* <Tooltip className='tooltip' id="my-tooltip" /> */}
            <Footer />
        </ScrollContainer>
      </main>
    </>
  )
}
