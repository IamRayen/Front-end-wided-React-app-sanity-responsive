import sanityClient from "@sanity/client"

const client = sanityClient({
  projectId: 'ike1aqnb',
  dataset: 'production',
  apiVersion: '2022-01-26',
  useCdn: true, 
})

export default client