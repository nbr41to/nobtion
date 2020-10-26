import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children, titlePre = '' }) => {
  return (
    <>
      <Header titlePre={titlePre} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
