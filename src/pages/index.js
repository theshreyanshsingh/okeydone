import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollContainer from "@/components/ScrollContainer";
import Clients from "@/sections/Clients";
import HomeContact from "@/sections/Contact";
import Featured from "@/sections/Featured";
import Hero, { HeroSlider } from "@/sections/Hero";
import { LoaderScreen } from "@/utilities";
import Head from "next/head";
import axios from "axios";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>{data.seo.pageTitle}</title>
        <meta name="description" content={data.seo.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://okaydone.in/" />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"
          crossOrigin="anonymous"
          defer
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js"
          crossOrigin="anonymous"
          defer
        ></script>
        <script type="text/javascript" src="/scripts/script.js" defer></script>
      </Head>
      <LoaderScreen />
      <main className={"main"}>
        <Background />
        <Navigation />
        <ScrollContainer>
          {data?.heroSectionType === "video" ? (
            <Hero data={data.video} />
          ) : (
            <HeroSlider />
          )}
          {data.sections.filter(
            (section) => section.sectionType === "clients"
          )[0] && (
            <Clients
              data={
                data.sections.filter(
                  (section) => section.sectionType === "clients"
                )[0]
              }
            />
          )}
          {data.sections.filter(
            (section) => section.sectionType === "insights"
          )[0] && (
            <Featured
              data={
                data.sections.filter(
                  (section) => section.sectionType === "insights"
                )[0]
              }
            />
          )}
          <HomeContact />
          <Footer />
        </ScrollContainer>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  let finalData = null;

  let query = JSON.stringify({
    query: `query MyQuery {
      homePages(last: 1) {
        seo {
          pageTitle
          metaDescription
        }
        sections {
          ... on ClientSection {
            id
            clients {
              ... on Client {
                id
                clientDetails (first: 100) {
                  clientLogo {
                    url
                  }
                  clientName
                }
              }
            }
            title
            description
            sectionType
          }
          ... on FeaturedInsight {
            id
            title
            ctaText
            ctaLink
            insightCards {
              ... on InsightCard {
                id
                caption
                clientName
                coverImage {
                  url
                }
                pageLink
              }
            }
            sectionType
          }
        }
        heroSectionType
        slides {
          title
          subTitle
          id
          ctaLinkText
          ctaLink
          backgroundImage {
            url
          }
        }
        video {
          title
          subTitle
          ctaText
          ctaLink
          id
          video {
            url
          }
          videoFallBackImage {
            url
          }
        }
      }
    }`,
    variables: {},
  });

  // Fetch data from external API
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api-ap-south-1.hygraph.com/v2/clk27gdle0jgc01t80koo6myr/master",
    headers: {
      "Content-Type": "application/json",
    },
    data: query,
  };

  await axios
    .request(config)
    .then((response) => {
      finalData = response.data;
      return { props: { data: finalData?.data?.homePages[0] } };
    })
    .catch((error) => {
      return { props: { data: null } };
    });

  return { props: { data: finalData?.data?.homePages[0] } };
}
