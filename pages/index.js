import { getClients } from '../lib/api'

export default function Home({ clients }) {
  return (
    <>
      <h1>Home</h1>
      <h2>Clients:</h2>
      <ul>
        {clients.map(client => {
          return (
            <li key={client.title}>
              {client.title}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const clients = await getClients()
  return {
    props: {
      clients,
      preview,
    },
    revalidate: 300, // every 5 minutes
  }
}