import sanityClient from "@sanity/client"

const client = sanityClient({
  projectId: 'ike1aqnb',
  dataset: 'production',
  useCdn: true, 
})

export default client