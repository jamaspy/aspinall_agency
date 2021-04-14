import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as styles from "../../scss/landing.module.scss"
import { gsap, Bounce } from "gsap"
const Landing = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "08.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )
  const imageData = data.desktop.childImageSharp.fluid
  useEffect(() => {
    gsap.to(".image", {
      visibility: "visible",
      delay: 0.3,
      duration: 2,
      ease: Bounce.easeOut,
      y: -10,
      x: -30,
    })
    gsap.to(".title", {
      visibility: "visible",
      delay: 0.3,
      duration: 2,
      ease: Bounce.easeOut,
      x: 120,
    })
  }, [])
  return (
    <div className={styles.container}>
      <div style={{ width: 400 }}>
        <Img className="image" id="picture" fluid={imageData} />
        <p className="title">coming soon :)</p>
      </div>
    </div>
  )
}

export default Landing
