import Background from '@/components/Background'
import LayeredButton, { ArrowButton } from '@/components/Button'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ScrollContainer from '@/components/ScrollContainer'
import { LoaderScreen } from '@/utilities'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'
import { useEffect } from 'react'

const TallySoPage = ({data}) => {
    return (
        <>
          <Head>
            <title>Okay Done | Careers - {data.title}</title>
            <meta name="description" content={data.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <LoaderScreen />
          <main className={"main"}>
            <Background />
            <Navigation noLogo={true} theme={true} />
            <ScrollContainer>
              <div className="brandpage-hero-back">
                <ArrowButton link={"/careers"} direction='down' theme={'white'} />
              </div>
                <div className='container'>
                  <iframe className='careers-jobpost-iframe' src={data.linkedInJobPostLink} />
                </div>
                <Footer />
            </ScrollContainer>
          </main>
        </>
    )
}

// This gets called on every request
export async function getServerSideProps(context) {
    let postId = context.params.id
    let finalData = null
  
    let query = JSON.stringify({
      query: `query JobPosts{
        jobPosts(where: {id: "${postId}"}){
          createdAt
          title
          description
          platform
          linkedInJobPostLink
        }
      }`,
      variables: {}
    });
  
    // Fetch data from external API
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api-ap-south-1.hygraph.com/v2/clk27gdle0jgc01t80koo6myr/master',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : query
    };
  
    await axios.request(config)
    .then((response) => {
      finalData = response.data
      return { props: { data: finalData.data.jobPosts[0] } }
    })
    .catch((error) => {
      console.log(error)
      return { props: { data: null } }
    });
  
    return { props: { data: finalData?.data?.jobPosts[0] } }
  }

export default TallySoPage