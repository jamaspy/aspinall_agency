import React, { useEffect, useState } from "react"
import * as styles from "../../scss/about.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import james from "../../images/07.png"
import sam from "../../images/02.png"
import jen from "../../images/11.png"
import kylie from "../../images/05.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
const Projects = () => {
  const list = ["preacta", "simplified_rec", "kloud_partners", "riptide.surf"]
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
  }

  const [number, setNumber] = useState(undefined)

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: ".aboutsvg",
      start: "center bottom",
    })
    tl.from(".abouttitle", { x: 200, opacity: 0, duration: 1.5 })
      .from(
        ".aboutsvg",
        { x: -200, opacity: 0, duration: 1.5, scale: 0.8 },
        "-=1"
      )
      .from(
        ".aboutcontent",
        {
          y: 300,
          opacity: 0,
          duration: 1.9,
        },
        "-=1"
      )
  }, [])

  useEffect(() => {
    const listItems = document.querySelectorAll("li")
    const photos = document.getElementsByName("picture")

    listItems.forEach((li, i) => {
      li.addEventListener("mouseenter", () => {
        setNumber(i)
      })
    })
  }, [])

  const data = useStaticQuery(
    graphql`
      query {
        preacta: file(relativePath: { eq: "preacta_colour.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        simple: file(relativePath: { eq: "simpli.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        kloud: file(relativePath: { eq: "kloud.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        rip: file(relativePath: { eq: "rip.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )
  const imageData = data.preacta.childImageSharp.fluid
  const imageData1 = data.simple.childImageSharp.fluid
  const imageData2 = data.kloud.childImageSharp.fluid
  const imageData3 = data.rip.childImageSharp.fluid

  const renderImage = () => {
    switch (number) {
      case 0:
        return (
          <>
            <Img
              key={number}
              name="picture"
              className={styles.image}
              fluid={imageData}
            />
            <p>TESTING</p>
          </>
        )
      case 1:
        return (
          <Img
            key={number}
            name="picture"
            className={styles.image}
            src={sam}
            fluid={imageData1}
          />
        )
      case 2:
        return (
          <Img
            key={number}
            name="picture"
            className={styles.image}
            fluid={imageData2}
          />
        )
      case 3:
        return (
          <Img
            key={number}
            name="picture"
            className={styles.image}
            fluid={imageData3}
          />
        )
      default:
        break
    }
  }

  return (
    <div className={styles.container}>
      <nav className={styles.left}>
        <p>Projects</p>
        <ul>
          {list.map((item, index) => (
            <>
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            </>
          ))}
        </ul>
      </nav>
      <section className={styles.right}>
        <div className="" style={{ width: "100%" }}>
          {renderImage()}
        </div>
      </section>
    </div>
  )
}

export default Projects
