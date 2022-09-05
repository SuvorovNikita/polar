import React from "react"
import Card from "../components/card/card"
import Content from "../components/content/content"
import Geography from "../components/geography/geography"
import Header from "../components/header/header"

import "../styles/index.scss"

const IndexPages = () => {
  return (
    <main>
      <Header />
      <Content />
      <Geography />
      <Card />
    </main>
  )
}

export default IndexPages
