import axios from 'axios'
import { GraphQLClient, gql } from 'graphql-request'

const ENDPOINT = 'https://api-ap-south-1.hygraph.com/v2/clatfakjj0scp01ugd7xg3o6c/master'
const KEY = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzU1MzQ4NTksImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsYXRmYWtqajBzY3AwMXVnZDd4ZzNvNmMvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImJlN2VmMDZhLTliNzgtNGFkMC05NGMzLTA1MTZiZTgxYjU5YSIsImp0aSI6ImNsZHFhNnpzMzJwbncwMXVuODBocTFkd2oifQ.k0ROtRem-2L35WIxk8DldZQoDxRzlQF7Tbm9aiduhUYnO5apxNY5aXfT_tnk5Hvz7ehtAYeCMwLRj9U6kRLkqxwJXV2t4YpE3-zcpSZHcIDd4GwvoPpEWBuwZI4FACxaKwnexAlc0gyQ3_udiUAbSBK8fipfdqmTuE7Vd9td24jG9AZemqRFL2F6j_iy7EMrjuJfsYp6vZkxnOuzO3wcbfvhZt0u5h0Z1t_fCaTKRTeFEHHcmOd8a82hC1ZZ0Eo0ngluvIA5EUdYFVNEif3PzQoxCqSVU0zr9PXoQ1gT8zbSmfLiEJTFdPUDyvhYQfHBf9Jyco-iWfv1vbBs8c0MtFtd46owWwZgA6B4PNeS4HrMKPD5arCHFOsYuqCUCH7995sZTW15x1CNgnr8PkRguruEVcLX09F7PNdXrBrjT03sM1N9w9ySELb0YtM_pAcdU-jmnO8PNYQIzn5qi5uoB_5mo_CCtr2QvjrVELchSPzwOyKaPNg0jNqecce0qyc8vPO98N4xoKx25SxJjQm-UyT2ny0SC57uGyj9I1qtpP0v9qcbtnCYAZ806LeXzxI44UVHdvOWbPxX8wWoeS5oaroXU-l3LNQmQ-RiZIXxo89d4ataDDoMdAJGswZpRjYVBDtWWkig2_Tka04TwSoeelT3IdWrv3Pm3Hp-dZv6J-k'

export const sendContactData = async (token, data) =>
    await axios.post('https://sheetdb.io/api/v1/07ma9x2urs0su', data, {
        headers: {
            Authorization: `Bearer jsc65uq7jr5tjt52rbi2oimtrbw3wd2kds8dauo0`
        }
    })

export const fetchClients = async () => {
    const graphQLClient = new GraphQLClient(ENDPOINT, {
        headers: {
          authorization: `Bearer ${KEY}`,
        },
    })
    const query = gql`
    {
        clients {
            clientLogo {
              url
            }
            clientName
            clientLatestWork
            clientWorkCategory
            priority
            background { 
                hex
            }
        }
    }`
    try{
        const data = await graphQLClient.request(query)
        return data
    }catch(err){
        console.log(err)
    }
}