import Background from '@/components/Background'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ScrollContainer from '@/components/ScrollContainer'
import Service from '@/sections/Solutions/Service'
import SolHero from '@/sections/Solutions/SolHero'
import Head from 'next/head'

//solution icons
import content from "../assets/solutions/content.svg"
import influencer from "../assets/solutions/influencer.svg"
import marketing from "../assets/solutions/marketing.svg"
import production from "../assets/solutions/production.svg"
import web from "../assets/solutions/web.svg"

//solutions backimg
import social from "../assets/solutions/content-gravy.jpg"
import infOne from "../assets/brands/oneplus/mirror/pic4.jpg"
import briggs from "../assets/solutions/damn-nice.jpg"
import switchoff from "../assets/brands/switchoff/pic1.jpg"
import rcb from "../assets/solutions/pm.jpeg"
import { LoaderScreen } from '@/utilities'

export default function Solutions() {
  return (
    <>
      <Head>
        <title>Okay Done | Solutions</title>
        <meta name="description" content="Okay Done is one bangalore's top agencies, that focuses on millennial marketing methods to help brands and organizations reach their optimum potential in the digital space." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoaderScreen />
      <main className={"main"}>
        <Background />
        <Navigation />
        <ScrollContainer>
            <SolHero />
            <div className='container'>
                <div className='solutions-heading'>
                    <h1>everything</h1>
                    <h1>digital</h1>
                </div>
            </div>
            <Service
            title={"Social Media & Marketing"}
            subtitle={"Content Strategy, Brand Strategy, Digital Strategy, Design Strategy, Creative Copy, Blogs"}
            icon={content.src}
            link={"/solutions/social-media-marketing"}
            flexalign={"flex-start"}
            color={"#A374FF"}
            backimg={social.src}
            />
            <Service
            title={"Production House"}
            subtitle={"Visuals, Audio, Scripting, Commercials, Ad Films, Short Films"}
            icon={production.src}
            link={"/solutions/production-house"}
            flexalign={"flex-end"}
            color={"#FFC64E"}
            backimg={briggs.src}
            />
            <Service
            title={"Influencer Marketing"}
            subtitle={"Influencers, Micro Influencers, Bloggers, Youtubers, Blog Listings, Celebrities"}
            icon={influencer.src}
            link={"/solutions/influencer-marketing"}
            flexalign={"flex-start"}
            color={"#17F1D1"}
            backimg={infOne.src}
            adjust={true}
            />
            <Service
            title={"Experience Design & Web Development"}
            subtitle={"UI/UX Design, Web Development, Mobile App Development, Full Stack Development, Web & Software Maintenance"}
            icon={web.src}
            link={"/solutions/web-development"}
            flexalign={"flex-end"}
            color={"#FFAD00"}
            backimg={switchoff.src}
            />
            <Service
            title={"Performance Marketing"}
            subtitle={"Lead Generation, Data Management, Analytics/Report, ROI Tracking, SEO, SEM, Email Marketing"}
            icon={marketing.src}
            link={"/solutions/performance-marketing"}
            flexalign={"flex-start"}
            color={"#00B2FF"}
            backimg={rcb.src}
            />
            <Footer />
        </ScrollContainer>
      </main>
    </>
  )
}
