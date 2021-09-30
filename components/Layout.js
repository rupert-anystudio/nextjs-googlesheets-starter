import Head from 'next/head'
import Link from 'next/link'

import { nav } from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>next.js googlesheets starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={nav}>
          <Link href='/'>{'Home'}</Link>
          <Link href='/about'>{'About'}</Link>
        </nav>
        <main>
          {children}
        </main>
        <footer>
          {'footer'}
        </footer>
      </header>
    </>
  )
}

export default Layout