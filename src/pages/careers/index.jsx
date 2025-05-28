import Background from '@/components/Background'
import LayeredButton from '@/components/Button'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ScrollContainer from '@/components/ScrollContainer'
import { LoaderScreen } from '@/utilities'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'

export default function Careers({data}) {
  return (
    <>
      <Head>
        <title>Okay Done | Careers</title>
        <meta name="description" content="Okay Done is one bangalore's top agencies, that focuses on millennial marketing methods to help brands and organizations reach their optimum potential in the digital space." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoaderScreen />
      <main className={"main"}>
        <Background />
        <Navigation />
        <ScrollContainer>
            <div className='container'>
                <div className='careers-heading'>
                    <h1>join the</h1>
                    <h1>team</h1>
                </div>
                <div className="row bm-5 flex-top">
                    <div className="col-6 col-sm-12 flex-right">
                        <LayeredButton action={() => window.scrollBy(0,800)} text={"Discover our vacancies"} />
                    </div>
                    <div className="col-6 col-sm-12">
                        <p className='careers-subhead'>
                        Come work with amazing people who create great things in a culture that puts people first. Ready to bring your experience and perspective to our team? Join us and let&apos;s build the best immersive experiences we can dream up together.
                        </p>
                    </div>
                </div>
            </div>
            {data.map((jp, i) =>
            <div className="container vacancies" id='vacancies' key={i}>
                <div className="job">
                    <h1 className="title">{jp.title}</h1>
                    <div className="description">
                        <h2>({jp.experience})</h2>
                        <p>{jp.description}</p>
                    </div>
                    <div className="apply">
                      {jp.platform == "linkedIn" && <a aria-label="linked in" href={jp.linkedInJobPostLink} className='apply-link' rel="noreferrer" target='_blank' style={{"--color": "teal"}}>Apply Now</a>}
                      {jp.platform == "tallySo" && <Link aria-label="linked in" href={`/careers/${jp.id}`} className='apply-link' style={{"--color":"teal"}}>Apply Now</Link>}
                    </div>
                </div>
            </div>)}
            <Footer />
        </ScrollContainer>
      </main>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {

  let finalData = null

  let query = JSON.stringify({
    query: `query JobPosts {
      jobPosts {
        platform
        createdAt
        description
        experience
        id
        linkedInJobPostLink
        publishedAt
        title
        updatedAt
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
    return { props: { data: finalData.data.jobPosts } }
  })
  .catch((error) => {
    console.log(error)
    return { props: { data: null } }
  });

  return { props: { data: finalData?.data?.jobPosts } }
}