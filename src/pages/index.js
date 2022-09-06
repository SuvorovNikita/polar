import React from "react"
import Card from "../components/card/card"
import Content from "../components/content/content"
import Footer from "../components/footer/footer"
import Geography from "../components/geography/geography"
import Header from "../components/header/header"
import Price from "../components/price/price"

import "../styles/index.scss"

const IndexPages = () => {
  return (
    <main>
      <Header />
      <Content />
      <Geography />
      <Card />
      <Price />
      <Footer />
    </main>
  )
}

export default IndexPages
