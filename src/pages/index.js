import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as styles from "../scss/about.module.scss"
import Landing from "../components/sections/Landing"
import Projects from "../components/sections/Projects"
import Skills from "../components/sections/Skills"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Landing />
    </Layout>
  )
}
export default IndexPage
