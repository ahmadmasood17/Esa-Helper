import React from 'react'
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

interface Layout{
    children:React.ReactNode;
}

const MainLayout:React.FC<Layout> = ({children}) => {
  return (
    <>
    <Header />
    <main>{children}</main>
    <Footer />
    </>
  )
}

export default MainLayout