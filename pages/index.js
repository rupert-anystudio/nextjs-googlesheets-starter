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

export async function getStaticProps(context) {
  const clients = await getClients()
  return {
    props: {
      clients,
    },
    revalidate: 30,
  }
}