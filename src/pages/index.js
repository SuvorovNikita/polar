import React from "react"
import Card from "../components/card/card"
import Content from "../components/content/content"
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
    </main>
  )
}

export default IndexPages
